import { faker } from '@faker-js/faker'

export const Attendees = Array.from({ length:200 }).map(() => {
    return {
        id: faker.number.int({ min:10000, max:20000 }),
        name: faker.person.fullName(),
        email: faker.internet.email().toLocaleLowerCase(),
        createdAt: faker.date.recent({ days:30 }),
        createdInAt: faker.date.recent( {days:7} )
    }
})