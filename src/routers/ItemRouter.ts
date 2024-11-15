import { Router } from "express";
import { GlobalMiddleWare } from "../middlewares/GlobalMiddleWare";
import { ItemController } from "../controllers/ItemController";
import { ItemValidators } from "../validators/ItemValidators";
import { Utils } from "../utils/Utils";

class ItemRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.getRoutes();
    this.postRoutes();
    this.patchRoutes();
    this.putRoutes();
    this.deleteRoutes();
  }
  getRoutes() {
    this.router.get('/getByCategory', GlobalMiddleWare.auth, ItemValidators.getProductsByCategory(), GlobalMiddleWare.checkError, ItemController.getProductsByCategory);
  }

  postRoutes() {
    this.router.post("/create",GlobalMiddleWare.auth, GlobalMiddleWare.adminOrStoreRole, new Utils().multer.array('productImages'), ItemValidators.addItem(), GlobalMiddleWare.checkError, ItemController.addItem);
  }

  patchRoutes() {}

  putRoutes() {}

  deleteRoutes() {}
}

export default new ItemRouter().router;