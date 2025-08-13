'use client';

export default function GoogleMap() {
	return (
		<iframe
			src="https://www.google.com/maps?q=25.1706187,55.3480918&z=15&output=embed"
			width="100%"
			height="450"
			style={{ border: 0 }}
			allowFullScreen={true}
			loading="lazy"
			referrerPolicy="no-referrer-when-downgrade"
			title="Legend World Automobile Services - Dubai"
		/>
	);
}


