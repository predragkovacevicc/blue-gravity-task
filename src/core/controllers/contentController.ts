import { contentService } from '@services';

import type { RequestHandler } from 'express';

export const getMany: RequestHandler = async (req, res, next) => {
  try {
    const result = await contentService.getMany();
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

export const getById: RequestHandler = async (req, res, next) => {
  try {
    const result = await contentService.getById(req.params.id);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

export const createOne: RequestHandler = async (req, res, next) => {
  try {
    await contentService.createOne(req.body);
    res.status(201).json();
  } catch (err) {
    next(err);
  }
};

export const updateOne: RequestHandler = async (req, res, next) => {
  try {
    await contentService.updateOne(req.params.id, req.body);
    res.status(200).json();
  } catch (err) {
    next(err);
  }
};

export const deleteOne: RequestHandler = async (req, res, next) => {
  try {
    await contentService.deleteOne(req.params.id);
    res.status(200).json();
  } catch (err) {
    next(err);
  }
};
