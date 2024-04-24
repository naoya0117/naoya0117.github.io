import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import LinkIcon from '@mui/icons-material/Link';
import { autocompleteClasses } from '@mui/material';

type CustomCardProps = {
    title: string;
    summary: string;
    techTags: string[];
    repoUrl: string;
    deployUrl?: string;
};

export const CustomCard = ({ title, summary, techTags, repoUrl, deployUrl } : CustomCardProps) => {
    return (
        <Box sx={{  
            margin: 1, 
            width: { xs: '100%', sm: '20rem' }
        }}>
            <a href={repoUrl} target="_blank" rel="noopener noreferrer">
                <Card sx={{ 
                    '&:hover': {
                        transform: 'scale(1.05)',
                        transition: 'transform 0.3s',
                    }
                }}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            {title}
                        </Typography>
                        {deployUrl && (
                            <Typography variant="body2" color="text.secondary">
                                <a href={deployUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#1976d2' }}>
                                    <LinkIcon /> {deployUrl}
                                </a>
                            </Typography>
                        )}
                        <Typography variant="body2" color="text.secondary">
                            {summary}
                        </Typography>
                        <Box sx={{ '& > :not(style)': { m: 0.5 } }}>
                            {techTags.map((tag, index) => (
                                <Chip key={index} label={tag} />
                            ))}
                        </Box>
                    </CardContent>
                </Card>
            </a>
        </Box>
    );
};
