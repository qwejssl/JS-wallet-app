const SITE_NAME = 'Wallet'

export const getTitle = ({ title }) => {
	return title ? `${title} | ${SITE_NAME}` : SITE_NAME
}
