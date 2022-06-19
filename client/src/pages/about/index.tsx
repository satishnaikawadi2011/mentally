import React from 'react';
import MentalTherapy from '../../animations/components/MentalTherapy';
import Layout from '../../components/Layout/Layout';

const AboutPage = () => {
	return (
		<Layout title="About Us">
			<h1 style={{ textAlign: 'center', marginTop: 100 }}>About Mentally</h1>
			<div style={{ display: 'flex', justifyContent: 'center' }}>
				<div style={{ maxWidth: 800, textAlign: 'justify', width: '100%' }}>
					<MentalTherapy />
					<p style={{ marginBottom: 10 }}>
						Mentally is the project build to help in spreading Mental health awareness. It has a feature of
						recommending treatment to a person by getiing info about some daily routine and work life.
					</p>
					<p style={{ marginBottom: 10 }}>
						As with your overall health, mental health influences the way that you function from day to day.
						This is why it is so important to care about mental health. If you do not take care of your
						mental health, you could find it challenging to work, build healthy relationships, and even
						leave your home.
					</p>
					<p style={{ marginBottom: 10 }}>
						Mentally is the small step towards helping people to get aware about mental health and providing
						them resources in doing so.
					</p>
				</div>
			</div>
		</Layout>
	);
};

export default AboutPage;
