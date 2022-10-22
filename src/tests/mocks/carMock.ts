import { ICar } from '../../interfaces/ICar';

const carMock: ICar = {
    model: "HB20",
    year: 2022,
    color: "preto",
    buyValue: 69000,
    doorsQty: 4,
    seatsQty: 5
}

const carMockWithId: ICar & { _id: string } = {
    _id: "63541546fda0f86ca134693f",
    model: "HB20",
    year: 2022,
    color: "preto",
    buyValue: 69000,
    doorsQty: 4,
    seatsQty: 5
};

export { carMock, carMockWithId };