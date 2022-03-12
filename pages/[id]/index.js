import dbConnect from "../../../utils/dbConnect";
import logEntrySchema from "../../../models/logEntrySchema";

dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const los = await logEntrySchema.find({});

        res.status(200).json({ success: true, data: logs });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const log = await logEntrySchema.create(req.body);

        res.status(201).json({ success: true, data: log });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
