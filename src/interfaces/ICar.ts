import { z } from 'zod';
import { VehicleZodSchema } from './IVehicle';

const CarZodSchema = VehicleZodSchema.extend({
  doorsQty: z.number({
    required_error: 'O DoorsQty é requerido',
    invalid_type_error: 'O DoorsQty precisa ser um número',
  }).int().gte(2).lte(4)
    .min(2, { message: 'A Quantidade de portas não pode ser inferior a 2' }),

  seatsQty: z.number({
    required_error: 'O SeatsQty é requerido',
    invalid_type_error: 'O SeatsQty precisa ser um número',
  }).int().gte(2).lte(7)
    .min(2, { message: 'A Quantidade de assentos não pode ser inferior a 2' }),
});

type ICar = z.infer<typeof CarZodSchema>;

export { CarZodSchema, ICar };
