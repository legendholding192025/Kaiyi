'use client';

export default function GoogleMap() {
	const envSrc = process.env.NEXT_PUBLIC_SERVICE_MAP_EMBED_SRC;
	const isValidEmbed = typeof envSrc === 'string' && /^https:\/\/www\.google\.com\/maps\/embed\?pb=/.test(envSrc);
	const embedSrc = isValidEmbed
		? (envSrc as string)
		: "https://www.google.com/maps?q=Legend%20World%20Automobile%20Services%20-%20Dubai&output=embed&z=15";
	return (
		<iframe
			src={embedSrc}
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


