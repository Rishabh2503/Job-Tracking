import Job from '../models/jobModals.js'
import { StatusCodes } from 'http-status-codes';
import {nanoid} from 'nanoid'
import { NotFoundError } from '../errors/customErrors.js';


let jobs = [
  { id: nanoid(), company: 'apple', position: 'front-end' },
  { id: nanoid(), company: 'google', position: 'back-end' },
];

export const getAllJobs = async(req,res)=>{
    const jobs = await Job.find({});
    res.status(StatusCodes.OK).json({jobs});
}
export const createJob = async  (req, res) => {
    // const {company,position} = req.body
    // if(!company|| !position){
    // return res.status(400).json({ msg : 'please provide company or position' });
    // return;
  
    // }
    // const id = nanoid(10);
    // const job = {id,company,position};
    // jobs.push(job);
    const job = await Job.create(req.body);
    res.status(StatusCodes.CREATED).json({ job });
  };

  export const getJob = async (req, res) => {
    const {id } = req.params;
    const job = await Job.findById(id);
    // if(!job){
    //   return res.status(404).json({msg:`no job with id ${id}`});
    // }
    if(!job) throw NotFoundError(`no job with id ${id}`)
    res.status(StatusCodes.OK).json({job});
  };
  export const updateJob = async (req, res) => {
    // const {company,position} = req.body;
    // if(!company || !position){
    //   return req.status(400).json({msg:`please provide company and position`})
    // }
    
    const { id } = req.params
    const updateJob = await Job.findByIdAndUpdate(id,req.body,{
        new:true
    })
    // const job = jobs.find((job)=>job.id === id);
    if(!updateJob){
      return res.status(404).json({msg:`no job with id ${id}`});
    }
    // job.company = company;
    // job.position  = position;
    res.status(StatusCodes.OK).json({msg:"job modified",job:updateJob});
  }
  export const deleteJob = async  (req, res) => {
  
    const { id } = req.params
  const removedJob = await Job.findByIdAndDelete(id)  
  if(!removedJob){
      return res.status(404).json({msg:`no job with id ${id}`});
    }
    res.status(StatusCodes.OK).json({msg:"job deleted" , job: removedJob});
  }
