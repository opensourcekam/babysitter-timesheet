import gql from 'graphql-tag';

export const FETCH_USER_QUERY = gql`
    query {
	    user(where: {
            id: "cjntestdudeug0a54rjlfk74x"
        }) {
            firstName
            lastName
            children {
                id
                firstName
                rateAmount
                gender
                dates {
                    id
                    month
                    day
                    year
                    hours
                    paid
                    dateObjectId
                }
            }
        }
    }
`;

export const CREATE_OR_UPDATE_DATE_MUTATION = gql`
    mutation UpsertDate(
        $dateId: ID,
        $childId: ID!,
        $month: Float!,
        $day: Float!,
        $year: Float!,
        $hours: Float!,
        $dayOfWeek: String!,
        $dateObjectId: String!,
    ) {
        upsertDate(where: {
            id: $dateId
        }
        create: {
            owner: {
                connect: {
                    id: $childId
                }
            },
            month: $month,
            day: $day,
            year: $year,
            hours: $hours,
            dayOfWeek: $dayOfWeek,
            dateObjectId: $dateObjectId,
        }
        update: {
            hours: $hours
        }) {
            id
            dateObjectId
        }
    }
`;
