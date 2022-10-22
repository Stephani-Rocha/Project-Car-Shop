import * as sinon from 'sinon';
import chai from 'chai';
import CarModel from '../../../models/Car';
import { Model } from 'mongoose';
import { carMock, carMockWithId } from '../../mocks/carMock';

const { expect } = chai;

describe('Car Model', () => {
    const carModel = new CarModel();

    before(async () => {
        sinon.stub(Model, 'create').resolves(carMockWithId);
        sinon.stub(Model, 'find').resolves([carMockWithId]);
        sinon.stub(Model, 'findOne').resolves(carMockWithId);
        sinon.stub(Model, 'findByIdAndUpdate').resolves(carMockWithId);
        sinon.stub(Model, 'findByIdAndDelete').resolves(carMockWithId);
    });

    after(() => {
        sinon.restore();
    });

    describe('creating a cars', () => {
        it('successfully created', async () => {
            const newCars = await carModel.create(carMock);
            expect(newCars).to.be.deep.equal(carMockWithId);
        });
    })
    describe('return cars', () => {
        it('successful return', async () => {
            const newCars = await carModel.read();
            expect(newCars).to.be.deep.equal([carMockWithId]);
        });
    })
    describe('searching a cars', () => {
        it('successfully found', async () => {
            const carsFound = await carModel.readOne('63541546fda0f86ca134693f');
            expect(carsFound).to.be.deep.equal(carMockWithId);
        });
        it('_id not found', async () => {
            try {
                await carModel.readOne('123ERRADO');
            } catch (error: any) {
                expect(error.message).to.be.eq('InvalidMongoId');
            }
        });
    })
    describe('updated a car', () => {
        it('sucessfuly a updated', async () => {
            const carsFound = await carModel.update('63541546fda0f86ca134693f', carMock);
            expect(carsFound).to.be.deep.equal(carMockWithId);
        });
        it('_id not found', async () => {
            try {
                await carModel.readOne('123ERRADO');
            } catch (error: any) {
                expect(error.message).to.be.eq('InvalidMongoId');
            }
        });
    })    
    describe('deleting a car', () => {
        it('successful deletion', async () => {
          const carDeleted = await carModel.delete('63541546fda0f86ca134693f');
          expect(carDeleted).to.be.deep.equal(carMockWithId);
        });      
        it('_id not found', async () => {
          try {
            await carModel.delete('123ERRADO');
          } catch (error: any) {
            expect(error.message).to.be.eq('InvalidMongoId');
          }
        });
      });
});