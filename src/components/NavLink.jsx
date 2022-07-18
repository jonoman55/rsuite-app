import { Link } from 'react-router-dom';
import { forwardRef } from 'react';

export const NavLink = forwardRef(({ href, children, ...other }, ref) => (
    <Link ref={ref} to={href} {...other}>
        {children}
    </Link>
));
