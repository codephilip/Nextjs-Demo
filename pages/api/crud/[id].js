/* eslint-disable import/no-anonymous-default-export */
import dbConnect from "../../../utils/dbConnect";
import LogEntry from "../../../models/LogEntry";

dbConnect();

export default async (req, res) => {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case "GET":
      try {
        const log = await LogEntry.findById(id);

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
        const log = await LogEntry.findByIdAndUpdate(id, req.body, {
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
        const deletedLog = await LogEntry.deleteOne({ _id: id });

        if (!deletedLog) {
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
