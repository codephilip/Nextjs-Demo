import dbConnect from "../../../utils/dbConnect";
import logEntrySchema from "../../../models/logEntrySchema";

dbConnect();

export default async (req, res) => {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case "GET":
      try {
        const log = await logEntrySchema.findById(id);

        if (!log) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: log });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "PUT":
      try {
        const log = await logEntrySchema.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });

        if (!log) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: log });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "DELETE":
      try {
        const deletedlog = await logEntrySchema.deleteOne({ _id: id });

        if (!deletedlog) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
