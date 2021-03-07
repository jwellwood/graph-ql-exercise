import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

interface Props {
  children?: React.ReactNode;
  title?: string;
  image?: string;
  onClick?: () => void;
}

const CustomCard: React.FC<Props> = ({ children, title, image, onClick }) => {
  return (
    <Card onClick={onClick}>
      <CardHeader title={title} />
      <CardContent>
        <div>
          <CardMedia
            component="div"
            image={image}
            title={title}
            style={{ height: 0, paddingTop: '56.25%' }}
          />
          {children}
        </div>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
