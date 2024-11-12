import Store from "../models/Store";
import User from "../models/User";
import { Utils } from "../utils/Utils";

export class StoreController {
  static async addStore(req, res, next) {
    const store = req.body;
    //const path = req.file.path;
    const verification_token = Utils.generateVerificationToken();
    try {
      //create store user
      const hash = await Utils.encryptPassword(store.password);
      const data = {
        email: store.email,
        verification_token,
        verification_token_time: Date.now() + new Utils().MAX_TOKEN_TIME,
        phone: store.phone,
        password: hash,
        name: store.name,
        type: "store",
        status: "active"
      };
      const user = await new User(data).save();

      //create store
      let store_data: any = {
        name: store.store_name,
        location: JSON.parse(store.location),
        address: store.address,
        status: store.status,
        city_id: store.city_id,
        user_id: user._id
      };
      
      if(req.file) store_data = { ...store_data, cover: req.file.path };
      if (store.description)store_data = {...store_data, description: store.description };
      if(store.openTime) store_data = { ...store_data, openTime: store.openTime };
      if(store.closeTime) store_data = { ...store_data, closeTime: store.closeTime };
      const storeDoc = await new Store(store_data).save();

      res.send(storeDoc);
    } catch (e) {
      next(e);
    }
  }
  static async getStores(req, res, next) {
    const EARTH_RADIUS_IN_KM = 6378.1;
    const data = req.query;
    const perPage = 10;
    const currentPage = parseInt(data.page) || 1;
    const prevPage = currentPage == 1 ? null : currentPage - 1;
    let nextPage = currentPage + 1;
    try {
      const stores_doc_count = await Store.countDocuments({
        status: "active",
        location: {
          //   $nearSphere: {
          //   $geometry: {
          //     type: "Point",
          //     coordinates: [parseFloat(data.lng), parseFloat(data.lat)]
          //   },
          //   $maxDistance: data.radius * METERS_PER_KM
          // }
          $geoWithin: {
            $centerSphere: [
              [parseFloat(data.lng), parseFloat(data.lat)],
              (parseFloat(data.radius) / EARTH_RADIUS_IN_KM)
            ]
          }
        }
      });
      // send empty array if no document on filter query exists

      if (!stores_doc_count) {
        res.json({
          stores: [],
          perPage,
          currentPage,
          prevPage,
          nextPage: null,
          totalPages: 0
          //totalRecords: stores_doc_count
        });
      }

      const totalPages = Math.ceil(stores_doc_count / perPage);
      if (totalPages == 0 || totalPages == currentPage) {
        nextPage = null;
      }
      if (totalPages < currentPage) {
        //throw new Error('No more stores available');
        throw "No more stores available";
      }
      const stores = await Store.find({
        status: "active",
        location: {
          //   $nearSphere: {
          //   $geometry: {
          //     type: "Point",
          //     coordinates: [parseFloat(data.lng), parseFloat(data.lat)]
          //   },
          //   $maxDistance: data.radius * METERS_PER_KM
          // }
          $geoWithin: {
            $centerSphere: [
              [parseFloat(data.lng), parseFloat(data.lat)],
              parseFloat(data.radius) / EARTH_RADIUS_IN_KM
            ]
          }
        }
      })
        .skip((currentPage * perPage) - perPage)
        .limit(perPage);
      // res.send(stores);
      res.json({
        stores,
        perPage,
        currentPage,
        prevPage,
        nextPage,
        totalPages
        //totalRecords: stores_doc_count
      });
    } catch (e) {
      next(e);
    }
  }
  static async searchStores(req, res, next) {
    const EARTH_RADIUS_IN_KM = 6378.1;
    const data = req.query;
    const perPage = 10;
    const currentPage = parseInt(data.page) || 1;
    const prevPage = currentPage == 1 ? null : currentPage - 1;
    let nextPage = currentPage + 1;
    try {
      const stores_doc_count = await Store.countDocuments({
        //status: "active",
        name: { $regex: data.name, $options: "i" },
        location: {
          //   $nearSphere: {
          //   $geometry: {
          //     type: "Point",
          //     coordinates: [parseFloat(data.lng), parseFloat(data.lat)]
          //   },
          //   $maxDistance: data.radius * METERS_PER_KM
          // }
          $geoWithin: {
            $centerSphere: [
              [parseFloat(data.lng), parseFloat(data.lat)],
              parseFloat(data.radius) / EARTH_RADIUS_IN_KM
            ]
          }
        }
      });
      // send empty array if no document on filter query exists

      if (!stores_doc_count) {
        res.json({
          stores: [],
          perPage,
          currentPage,
          prevPage,
          nextPage: null,
          totalPages: 0
          //totalRecords: stores_doc_count
        });
      }

      const totalPages = Math.ceil(stores_doc_count / perPage);
      if (totalPages == 0 || totalPages == currentPage) {
        nextPage = null;
      }
      if (totalPages < currentPage) {
        //throw new Error('No more stores available');
        throw "No more stores available";
      }
      const stores = await Store.find({
        //status: "active",
        name: { $regex: data.name, $options: "i" },
        location: {
          //   $nearSphere: {
          //   $geometry: {
          //     type: "Point",
          //     coordinates: [parseFloat(data.lng), parseFloat(data.lat)]
          //   },
          //   $maxDistance: data.radius * METERS_PER_KM
          // }
          $geoWithin: {
            $centerSphere: [
              [parseFloat(data.lng), parseFloat(data.lat)],
              parseFloat(data.radius) / EARTH_RADIUS_IN_KM
            ]
          }
        }
      })
        .skip(currentPage * perPage - perPage)
        .limit(perPage);

      // res.send(stores);
      res.json({
        stores,
        perPage,
        currentPage,
        prevPage,
        nextPage,
        totalPages
        //totalRecords: stores_doc_count
      });
    } catch (e) {
      next(e);
    }
  }

  static async getAllStores(req, res, next) {
    try {
      const stores = await Store.find({
        status: "active"
      });
      res.send(stores);
    } catch (e) {
      next(e);
    }
  }
}
