import client from './client';

const recommendTreatment = (values: any) => {
	return client.post(`/treatment_recommendation`, values);
};

export default {
	recommendTreatment
};
