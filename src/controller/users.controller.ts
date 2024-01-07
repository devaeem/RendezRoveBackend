import express, { Application, Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import { usersModel } from "../models/users.models";
import { user, Users, status, SortParams } from "../interface/user.interface";

const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

exports.list = async (req: Request, res: Response) => {
  try {

    const page: number = parseInt(req.query.page as string) || 1;
    const pageSize: number = parseInt(req.query.pageSize as string) || 10;
    const offset: number = (page - 1) * pageSize;
    const total: number = await usersModel.countDocuments();
    const totalPages: number = Math.ceil(total / pageSize);
    const prevPage: number | null = page > 1 ? page - 1 : null;
    const nextPage: number | null = page < totalPages ? page + 1 : null;
    const hasNextPage: boolean = page < totalPages;
    const hasPrevPage: boolean = page > 1;
    const pagingCounter: number = (page - 1) * pageSize + 1;

    // const sortOrder: any = req.query.sort || 1;

    const listuser: Users[] = await usersModel
      .find()
      .select("-password")
      .skip(offset)
      .limit(pageSize)
      // .sort({ createdAt: sortOrder })
      .exec();
    

    res.status(200).json({
      data:{ rows: listuser || [],
      total: total,
      totalPages: totalPages,
      page: page,
      pageSize: pageSize,
      pagingCounter: pagingCounter,
      hasPrevPage: hasPrevPage,
      hasNextPage: hasNextPage,
      prevPage: prevPage,
      nextPage: nextPage
    },
      code: 200,
      message: `sucess`,
    });
  } catch (err) {
    res.status(500).json({
      code: 500,
      message: err,
    });
  }
};

exports.create = async (req: Request, res: Response) => {
  try {
    const postData = req.body;
    const user = await usersModel
      .findOne({ username: postData.username })
      .lean();
    if (user) {
      return res.status(400).send("User Already exists");
    }
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    postData.password = await bcrypt.hash(postData.password, salt);
    postData.fullname = postData.firstname + " " + postData.lastname;
    postData.id = uuidv4();

    const newUser = await new usersModel(postData).save();
    const savedUser = await newUser.save();
    res.status(201).json({
      message: "create-users",
      data: savedUser,
    });
  } catch (err) {
    res.status(500).json({
      code: 500,
      message: err,
    });
  }
};

exports.update = async (req: Request, res: Response) => {
  try {
    const updateData = req.body;
    const id = req.params.id;
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    updateData.password = await bcrypt.hash(updateData.password, salt);

    const userUpdate = await usersModel.findOneAndUpdate(
      { id: id },
      updateData,
      { new: true }
    );

    res.status(200).json({
      // message: `update-users-${id}`,
      data: updateData,
      code: 200,
      message: `sucess`,
    });
  } catch (err) {
    res.status(500).json({
      message: err,
      data: "Server Error!!!",
    });
  }
};

exports.remove = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    let updateActive = req.body;
    if (updateActive.active === false) {
      updateActive.active = true;
    } else {
      updateActive.active = false;
    }

    const userRemove = await usersModel.findOneAndUpdate(
      { id: id },
      updateActive,
      { new: true }
    );
    res.status(200).json({
      data: userRemove,
      code: 200,
      message: `sucess`,
    });
  } catch (err) {
    res.status(500).json({
      code: 500,
      message: err,
    });
  }
};

exports.active = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    let updateActive = req.body;
    if (updateActive.status == "verify") {
      updateActive.status = status.VERIFY;
    }
    if (updateActive.status == "Banned") {
      updateActive.status = status.BANNED;
    }

    const userActive = await usersModel.findOneAndUpdate(
      { id: id },
      updateActive,
      { new: true }
    );
    res.status(200).json({
      data: userActive,
      code: 200,
      message: `sucess`,
    });
  } catch (err) {
    res.status(500).json({
      message: err,
      data: "Server Error!!!",
    });
  }
};
