import { Request } from 'express';

export interface RequestWithUser extends Request {
  user?: any; // Puedes tiparlo mejor si tienes una interfaz de usuario
}
