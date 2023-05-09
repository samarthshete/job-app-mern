import Job from "../models/Job.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, NotFoundError } from "../errors/index.js";
import checkPermissions from "../utils/checkPermission.js";
const createJob = async (req, res) => {
  const { position, company, salary } = req.body;

  if (!position || !company) {
    throw new BadRequestError("Please provide all values");
  }
  req.body.createdBy = req.user.userId;

  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
};
const deleteJob = async (req, res) => {
  const { id: jobId } = req.params;

  const job = await Job.findOne({ _id: jobId });

  if (!job) {
    throw new NotFoundError(`No job with id : ${jobId}`);
  }

  checkPermissions(req.user, job.createdBy);

  const deletedJob = await Job.findOneAndDelete({ _id: jobId });

  res.status(StatusCodes.OK).json({ msg: "Success! Job removed" });
  // res.send('job deleted')
};
const getAllJobs = async (req, res) => {
  const { search, status, jobType, sort } = req.query;
  const jobs = await Job.find({ createdBy: req.user.userId });

  res
    .status(StatusCodes.OK)
    .json({ jobs, totalJobs: Job.length, numOfPages: 1 });
  // res.send('All Jobs')
};
const updateJob = async (req, res) => {
  res.send("job updated");
};
const showStats = async (req, res) => {
  res.send("Jobs Stats");
};
export { createJob, deleteJob, getAllJobs, updateJob, showStats };
