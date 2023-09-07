import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface CardHeaderProps {
    titulo: string;
  }
  interface CardBodyProps {
    body: string;
  }
  interface CardFooterProps {
    rodape: string;
  }

  interface CardProps {
    header?: string,
    footer?: string,
    body: string
  }
  

  const CardHeader: React.FC<CardHeaderProps> = ({ titulo }) => (
    <View style={styles.cardHeader}>
      <Text style={styles.cardHeaderText}>{titulo}</Text>
    </View>
  );

const CardBody: React.FC<CardBodyProps> = ({ body }) => (
  <View style={styles.cardBody}>Departamento: {body}</View>
);

const CardFooter: React.FC<CardFooterProps> = ({ rodape }) => (
  <View style={styles.cardFooter}>
    <Text style={styles.cardFooterText}>Valor: {rodape}</Text>
  </View>
);

const Card: React.FC<CardProps> = ({ header, footer, body }) => (
  <View style={styles.card}>
    {header && <CardHeader titulo={header}  />}
    <CardBody body={body}></CardBody>
    {footer && <CardFooter rodape={footer} />}
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 16,
    elevation: 2,
  },
  cardHeader: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  cardHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardBody: {
    padding: 16,
  },
  cardFooter: {
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    padding: 16,
  },
  cardFooterText: {
    fontSize: 16,
  },
});

export default Card;
