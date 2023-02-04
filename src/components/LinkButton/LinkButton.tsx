import { FC } from 'react';
import { Link } from 'react-router-dom';

interface IButtonLinkButtonProps {
	children: string;
	modificator?: string;
}

const LinkButton: FC<IButtonLinkButtonProps> = ({ children, modificator }) => {
	return (
		<Link className={`font-semibold text-base text-darkGrey bg-gold flex items-center justify-center ${modificator}`} to={'#'}>{children}</Link>
	);
};

export default LinkButton;
