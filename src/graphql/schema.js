const {buildSchema} = require('graphql');

const schema = buildSchema(`
    type Query {
        history: [HistoryElement]
        historyItem(id: Int!): HistoryElement
    },
    type Mutation {
        insertHistoryItem(historyElement: HistoryElementInput): HistoryElement
    },
    type HistoryElement {
        id: Int
        name: String
        nickNames: [String]
        payments: [Payment]
        summary: [Settlement]
    },
    type Payment {
        whoPayed: String!
        forWhom: [String]
        howMany: Float
    },
    type Settlement {
        whoPays: String,
        whomPays: String,
        howMany: Float
    },
    input HistoryElementInput {
        id: Int
        name: String
        nickNames: [String]
        payments: [PaymentInput]
        summary: [SettlementInput]
    },
    input PaymentInput {
        whoPayed: String!
        forWhom: [String]
        howMany: Float
    },
    input SettlementInput {
        whoPays: String,
        whomPays: String,
        howMany: Float
    }
`);

module.exports = schema;
