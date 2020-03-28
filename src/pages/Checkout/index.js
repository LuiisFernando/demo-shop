import React, { useState } from 'react';
import { theme } from '../../styles/global';
import { 
    makeStyles,
    Grid, 
    InputAdornment,
    IconButton,
    Typography,
    TextField,
    Select,
    Button
} from '@material-ui/core';
import {ArrowBackIos, CheckCircle} from '@material-ui/icons';
import Card from 'react-credit-cards';
import { Formik, Form, Field } from 'formik';

import card from '../../assets/card.svg';

import {
    formatCreditCardNumber,
    formatCVC,
    formatExpirationDate,
    formatFormData,
  } from '../../helper/index';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flex: '1',
        height: '100%'
    },
    carSide: {
        background: theme.colors.background,
        paddingTop: '54px',
        paddingLeft: '68px'
    },
    cardInfo: {
        marginTop: '50px',
        marginLeft: '70px',
        display: 'flex',
        flexDirection: 'row',
    },
    cardTitle: {
        fontFamily: 'Verdana, Bold',
        fontSize: '20px',
        color: '#FFF',
        marginLeft: '15px'
    },
    infoSide: {
        background: '#FFF',
        padding: '50px 50px 0 250px'
    },
    button: {
        background: '#DE4B4B',
        width: '246px',
        height: '51px',
        borderRadius: '10px',
        color: '#FFF',
        '&:hover': {
            background: '#ad4b4b'
        }
    }
});

export default function Checkout() {
    const classe = useStyles('');
    const [cvv, setCvv] = useState('');
    const [expiry, setExpiry] = useState('');
    const [focus, setFocus] = useState('');
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    function handleInputFocus(input) {
        setFocus(input);
    }



    return (
        <Grid container direction="row" className={classe.container}>
            <Grid item xs={4} md={4} className={classe.carSide}>
                <div>
                    <InputAdornment position="end">
                        <IconButton edge="end" style={{ color: '#FFf', marginRight: '5px' }}>
                            <ArrowBackIos />
                        </IconButton>
                        <Typography style={{ color: '#FFf'}}>Alterar forma de pagamento</Typography>
                    </InputAdornment>
                    
                </div>
                <div className={classe.cardInfo}>
                    <img src={card} alt="card-img" />
                    <Typography className={classe.cardTitle}>Adicione um novo cartão de crédito</Typography>
                </div>
                <div style={{ marginTop: '30px', marginLeft: '150px' }}>
                    <Card
                        cvc={cvv}
                        expiry={expiry}
                        focused={focus}
                        name={name}
                        number={number}
                    />
                </div>

            </Grid>
            <Grid item xs={8} md={8} className={classe.infoSide}>
                <Grid container direction="row">
                    <CheckCircle />
                    Carrinho
                </Grid>
                <Grid item xs md style={{ marginTop: '75px' }}>
                    <div style={{ margin: ''}}>
                        <Formik>
                            <Form>
                                <Grid item xs={12} md={12}>
                                    <Field 
                                        name="cardNumber"
                                        children={({ field }) => (
                                            <TextField
                                                style={{ width: '100%' }}
                                                label="Número do cartão"
                                                type="tel"
                                                name="number"
                                                pattern="[\d| ]{16,22}"
                                                value={number}
                                                onChange={(e) => {
                                                    const value = formatCreditCardNumber(e.target.value);
                                                    console.log(value);
                                                    setNumber(value);
                                                }}
                                                onFocus={() => handleInputFocus('number')}
                                            />
                                        )}
                                    />
                                </Grid>
                                <Grid item xs={12} md={12} style={{ marginTop: '60px' }}>
                                    <Field 
                                        name="nome"
                                        children={({ field }) => (
                                            <TextField
                                                style={{ width: '100%' }}
                                                label="Nome (igual ao cartão)"
                                                type="tel"
                                                name="name"
                                                pattern="[\d| ]{16,22}"
                                                value={name}
                                                onChange={(e) => {
                                                    setName(e.target.value);
                                                }}
                                                onFocus={() => handleInputFocus('name')}
                                            />
                                        )}
                                    />
                                </Grid>
                                <Grid container direction="row" style={{ marginTop: '60px' }}>
                                    <Grid item xs={6} md={6}>
                                        <Field 
                                            name="expiry"
                                            children={({ field }) => (
                                                <TextField
                                                    style={{ width: '90%' }}
                                                    label="Validade"
                                                    type="tel"
                                                    name="expiry"
                                                    pattern="\d\d/\d\d"
                                                    value={expiry}
                                                    onChange={(e) => {
                                                        const value = formatExpirationDate(e.target.value);
                                                        setExpiry(value);
                                                    }}
                                                    onFocus={() => handleInputFocus('expiry')}
                                                />
                                            )}
                                        />
                                    </Grid>
                                    <Grid item xs={6} md={6}>
                                        <Field 
                                                name="cvv"
                                                children={({ field }) => (
                                                    <TextField
                                                        style={{ width: '100%' }}
                                                        label="CVV"
                                                        type="tel"
                                                        name="cvv"
                                                        pattern="\d{3,4}"
                                                        value={cvv}
                                                        onChange={(e) => {
                                                            const value = formatCVC(e.target.value);
                                                            setCvv(value);
                                                        }}
                                                        onFocus={() => handleInputFocus('cvc')}
                                                    />
                                                )}
                                            />
                                    </Grid>
                                </Grid>
                                <Grid item xd md style={{ marginTop: '60px' }}>
                                    <Field
                                        name="parcelas"
                                        children={({field}) => (
                                            <Select
                                                native
                                                label="Número de parcelas"
                                                style={{width: '100%'}}
                                            >
                                                <option value="" />
                                                <option value="1">1x 1000 Sem Juros</option>
                                                <option value="2">2x 2000 Sem Juros</option>
                                                <option value="3">3x 3000 Sem Juros</option>
                                            </Select>
                                        )}
                                    />
                                </Grid>
                                <Grid container justify="flex-end" style={{ marginTop: '60px' }}>
                                    <Button className={classe.button}>CONTINUAR</Button>
                                </Grid>
                            </Form>
                        </Formik>
                    </div>
                </Grid>
            </Grid>
 
        </Grid>
    );
}