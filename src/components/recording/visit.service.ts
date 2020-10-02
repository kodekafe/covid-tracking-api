import { ReturnAPIError, ReturnAPISuccess } from "../../types";

export const doRecordDeparture = async (
  phoneNumber: string
): Promise<ReturnAPIError | ReturnAPISuccess> => {
  const record = await VisitModel.findOne({ phoneNumber: phoneNumber });
  if (!record) {
    return {
      status: 404,
      success: false,
      message: "Record not found",
    };
  }
  return await record.update({ leftAt: new Date() });
};

export const doGetAllVisits = async (today?: boolean) => {
  if (today) {
    const todayDate = new Date().getDate().toString()
    VisitModel.find({  })
  }
}
