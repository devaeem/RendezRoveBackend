import express, { Application, Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import {user} from '../interface/user.interface'


exports.list = async (req:Request, res:Response) => {
try{
  
  res.status(200).json({
    message: 'list -users',
    data:  'list'
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
      const posrData:user[] = req.body
      res.status(200).json({
        message: 'create-users',
        data:  posrData
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
            const id:user = req.params
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
              
                const id:user = req.params
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
                    const id:user = req.params
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
