import express, { Application, Request, Response } from "express";
import { usersModel } from "../models/users.models";
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");