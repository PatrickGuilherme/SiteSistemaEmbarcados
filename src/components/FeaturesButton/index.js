import React from 'react';
import { Button } from './styles';

export default function FeaturesButton({ children, onOpenFeaturesModal }) {
  return <Button onClick={onOpenFeaturesModal}>{children}</Button>;
}
