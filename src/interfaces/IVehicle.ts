import { z } from 'zod';

const VehicleZodSchema = z.object({
  model: z.string({
    required_error: 'O Model é requerido',
    invalid_type_error: 'O Model precisa ser uma string',    
  }).min(3, { message: 'Model must be 3 or more characters long' }),

  year: z.number({
    required_error: 'O Year é requerido',
    invalid_type_error: 'O Year precisa ser um número',  
  }).int().gte(1900).lte(2022),

  color: z.string({
    required_error: 'O Color é requerido',
    invalid_type_error: 'O Color precisa ser uma string', 
  }).min(3, { message: 'Color must be 3 or more characters long' }),

  status: z.boolean({
    required_error: 'O Status é requerido',
    invalid_type_error: 'O Status precisa ser um boleano',
  }).optional(),

  buyValue: z.number({
    required_error: 'O BuyValue é requerido',
    invalid_type_error: 'O BuyValue precisa ser um número',
  }).int(),
});

type IVehicle = z.infer<typeof VehicleZodSchema>;

export { VehicleZodSchema, IVehicle };
