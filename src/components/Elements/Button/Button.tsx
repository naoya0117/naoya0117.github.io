import React from 'react';
import Button from '@mui/material/Button';
import { Link as RouterLink } from 'react-router-dom';

type CustomButtonProps = {
    children: React.ReactNode;
    to: string;
    variant?: 'text' | 'outlined' | 'contained';
    color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
    external?: boolean;
}

export const CustomButton = ({
    children,
    to,
    variant = 'contained',
    color = 'primary',
    external = false,
    ...props
}: CustomButtonProps) => {
    const LinkComponent = external ? 'a' : RouterLink;
    const LinkProps = external ? { href: to } : { to };

    return (
        <Button
            sx={{
                '&:hover': {
                    transform: 'scale(1.05)',
                    transition: 'transform 0.3s',
                }
            }}
            component={LinkComponent}
            {...LinkProps}
            variant={variant}
            color={color}
            className="transition-transform duration-75 ease-in-out hover:scale-110"
            {...props}
        >
            {children}
        </Button>
    )
}