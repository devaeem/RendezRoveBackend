import express, { Application, Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import {usersModel} from '../models/users.models'
import { user, Users } from '../interface/user.interface';
const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

exports.list = async (req:Request, res:Response) => {
try{
  const listuser:Users[]  =await usersModel.find().exec();
  res.status(200).json({
    message: 'list -users',
    data:  listuser
  });   
}catch(err){
  res.status(500).json({
    message: err,
    data:  'Server Error!!!'
  }); 
}             
};

exports.create = async (req:Request, res:Response) => {
    try{
      const postData = req.body
      let user = await usersModel.findOne({ username:postData.username });
      if (user) {
      return res.status(400).send("User Already exists");
      }
      const salt = await bcrypt.genSalt(15);
      postData.password = await bcrypt.hash(postData.password, salt);

       const id:string = uuidv4();
       postData.id = id;
       const createUsers:any =await new usersModel(postData).save()
      res.status(201).json({
        message: 'create-users',
        data:  createUsers
      });   
    }catch(err){
      res.status(500).json({
        message: err,
        data:  'Server Error!!!'
      }); 
    }             
    };

exports.update = async (req:Request, res:Response) => {
        try{
            const {id} = req.params
          res.status(200).json({
            message: `update-users-${id}`,
            data:  id
          });   
        }catch(err){
          res.status(500).json({
            message: err,
            data:  'Server Error!!!'
          }); 
        }             
        };

exports.remove = async (req:Request, res:Response) => {
            try{
              
                const {id} = req.params
                res.status(200).json({
                  message: `delete-users-${id}`,
                  data:  id
                });   
            }catch(err){
              res.status(500).json({
                message: err,
                data:  'Server Error!!!'
              }); 
            }             
            };

exports.active = async (req:Request, res:Response) => {
                try{
                    const {id} = req.params
                    res.status(200).json({
                      message: `active-users-${id}`,
                      data:  id
                    });   
                }catch(err){
                  res.status(500).json({
                    message: err,
                    data:  'Server Error!!!'
                  }); 
                }             
                };
