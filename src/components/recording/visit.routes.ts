import { Router, Request, Response } from "express";
import { BaseAPIReturn, ReturnAPIError, ReturnAPISuccess } from "../../types";

import { VisitModel } from "../../models/Visit";

const router = Router();

router.post(
  "/",
  async (req: Request, res: Response): Promise<void> => {
    const response: ReturnAPIError | ReturnAPISuccess | BaseAPIReturn = {
      status: 200,
    };

    if (!req.body.name || !req.body.phoneNumber) {
      (response as ReturnAPIError) = {
        success: false,
        status: 400,
        message: "Missing required parameter",
      };
    } else {
      await new VisitModel({
        name: req.body.name,
        phoneNumber: req.body.phoneNumber,
        arrivedAt: new Date(),
        leftAt: null,
      })
        .save()
        .then((document) => {
          console.log("Saved new visit");
          response.status = 201;
          response.success = true;
          (response as ReturnAPISuccess).data = document;
        })
        .catch((reason) => {
          console.warn(`Saving of visit failed. Reason:\n${reason}`);
          const returnValue: ReturnAPIError = {
            status: 500,
            success: false,
            message: reason,
          };
          return returnValue;
        });
    }
    res.status(response.status);
    if (!response.success) {
      res.send((response as ReturnAPIError).message);
    } else {
      res.send((response as ReturnAPISuccess).data);
    }
  }
);

router.post("/departure", async (req: Request, res: Response) => {
  const response: ReturnAPIError | ReturnAPISuccess | BaseAPIReturn = {
    status: 200,
  };
  if (!req.body.phoneNumber) {
    response.status = 400;
    response.success = false;
    (response as ReturnAPIError).message = "Missing required parameter";
  } else {
    const record = await VisitModel.findOne({
      phoneNumber: req.body.phoneNumber,
    });
    if (!record) {
      response.status = 404;
      response.success = false;
      (response as ReturnAPIError).message = "Record not found";
    }
    await record.updateOne({ leftAt: new Date() }).then((doc) => {
      response.status = 200;
      response.success = true;
      (response as ReturnAPISuccess).data = doc;
    });
  }
  res.status(response.status);
  if (!response.success) {
    res.send((response as ReturnAPIError).message);
  } else {
    res.send((response as ReturnAPISuccess).data);
  }
});

router.get(
  "/",
  async (req: Request, res: Response): Promise<void> => {
    res.send(await VisitModel.find({}));
  }
);

export default router;
