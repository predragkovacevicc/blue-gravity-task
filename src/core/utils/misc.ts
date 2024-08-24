import { ZodError } from 'zod';
import { fromZodError } from 'zod-validation-error';
import {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientInitializationError,
  PrismaClientRustPanicError,
  PrismaClientValidationError,
} from '@prisma/client/runtime/library';

import type { Response } from 'express';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const checkIsPrismaError = (err: any) =>
  err instanceof PrismaClientKnownRequestError ||
  err instanceof PrismaClientUnknownRequestError ||
  err instanceof PrismaClientInitializationError ||
  err instanceof PrismaClientRustPanicError ||
  err instanceof PrismaClientValidationError;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const checkIsZodError = (err: any) => err instanceof ZodError;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getErrorStatusCode = (err: any, res: Response): number => {
  if (checkIsPrismaError(err)) return 404;
  if (checkIsZodError(err)) return 400;
  return err.statusCode ?? res.statusCode ?? 500;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getErrorMessage = (err: any): string => {
  if (checkIsPrismaError(err)) return 'Database Error';
  if (checkIsZodError(err)) return fromZodError(err).message;
  return err.message || 'Internal server error';
};
