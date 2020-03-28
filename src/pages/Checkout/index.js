import React, { useState } from 'react';
import { 
    Grid, 
    InputAdornment,
    IconButton,
    Typography,
    TextField,
    Select,
    Button
} from '@material-ui/core';
import {ArrowBackIos, CheckCircle, ArrowForwardIos} from '@material-ui/icons';
import Card from 'react-credit-cards';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import {
    formatCreditCardNumber,
    formatCVC,
    formatExpirationDate,
  } from '../../helper/index';

import { schema } from '../../helper/schema';

import { addCard } from '../../services/api/addCardApi';

import card from '../../assets/card.svg';
import { useStyles } from './styles';

export default function Checkout() {
    const classe = useStyles('');
    const [cvv, setCvv] = useState('');
    const [expiry, setExpiry] = useState('');
    const [focus, setFocus] = useState('');
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const initialValues = {
        number: '',
        name: '',
        expiry: '',
        cvv: '',
        parcelas: ''
    };

    function handleInputFocus(input) {
        setFocus(input);
    }

    async function handleSubmit({ number, name, expiry, cvv, parcelas }) {
        console.log(number);
        console.log(name);
        console.log(expiry);
        console.log(cvv);
        console.log(parcelas);

        await addCard({
            number,
            name,
            expiry,
            cvv,
            parcelas
        })
    }

    return (
        <Grid container className={classe.container}>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4} className={classe.carSide}>
                <div>
                    <InputAdornment position="end">
                        <IconButton edge="end" style={{ color: '#FFf', marginRight: '5px' }}>
                            <ArrowBackIos />
                        </IconButton>
                        <Typography className={classe.textoAlterar}>
                            Alterar forma de pagamento
                        </Typography>
                    </InputAdornment>
                    
                </div>
                <div className={classe.etapa}>
                    <span style={{fontFamily: 'Verdana, Bold'}}>Etapa</span> 2 de 3
                </div>
                <div className={classe.cardInfo}>
                    <img src={card} alt="card-img" />
                    <Typography className={classe.cardTitle}>Adicione um novo cartão de crédito</Typography>
                </div>
                <div className={classe.card}>
                    <Card
                        cvc={cvv}
                        expiry={expiry}
                        focused={focus}
                        name={name}
                        number={number}
                    />
                </div>

            </Grid>
            <Grid item xs={12} sm={12} md={8} lg={8} xl={8} className={classe.infoSide}>
                <Grid container direction="row" className={classe.passos}>
                    <div className={classe.step1}>
                    <CheckCircle style={{color: 'red' }} />
                    <span className={classe.stepText}>
                        Carrinho
                    </span>
                    <ArrowForwardIos style={{color: 'red' }}/>
                    </div>
                    <div className={classe.step2}>
                        <div className={classe.circledNumber}>
                            2
                        </div>
                        <span className={classe.stepText}>
                            Pagamento
                        </span>
                        <ArrowForwardIos style={{color: 'red' }}/>
                    </div>
                    <div className={classe.step3}>
                         <div className={classe.circledNumber}>
                            3
                        </div>
                        <span className={classe.stepText}>
                            Confirmação
                        </span>
                        <ArrowForwardIos style={{color: 'red' }}/>
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ marginTop: '75px' }}>
                    <div style={{ margin: ''}}>
                        <Formik
                            validationSchema={schema}
                            initialValues={initialValues}
                            onSubmit={handleSubmit}
                        >
                            {({ setFieldValue }) => (
                                <Form>
                                    <Grid item xs={12} md={12} style={{ paddingBottom: '40px', maxHeight: '80px' }}>
                                        <Field
                                            style={{ marginBottom: '5px' }}
                                            name="number"
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
                                                        setNumber(value);
                                                        setFieldValue('number', value);
                                                    }}
                                                    onFocus={() => handleInputFocus('number')}
                                                />
                                            )}
                                        />
                                        <ErrorMessage name="number" component="div" className="hasError" />
                                    </Grid>
                                    <Grid item xs={12} md={12} style={{ marginTop: '10px', paddingBottom: '40px', maxHeight: '80px' }}>
                                        <Field 
                                            name="name"
                                            children={({ field }) => (
                                                <TextField
                                                    {...field}
                                                    style={{ width: '100%' }}
                                                    label="Nome (igual ao cartão)"
                                                    type="tel"
                                                    name="name"
                                                    pattern="[\d| ]{16,22}"
                                                    value={name}
                                                    onChange={(e) => {
                                                        setName(e.target.value);
                                                        setFieldValue('name', e.target.value);
                                                    }}
                                                    onFocus={() => handleInputFocus('name')}
                                                />
                                            )}
                                        />
                                        <ErrorMessage name="name" component="div" className="hasError" />
                                    </Grid>
                                    <Grid container direction="row" style={{ marginTop: '10px', paddingBottom: '40px', maxHeight: '80px' }}>
                                        <Grid item xs={6} md={6}>
                                            <Field 
                                                name="expiry"
                                                children={({ field }) => (
                                                    <TextField
                                                        {...field}
                                                        style={{ width: '90%' }}
                                                        label="Validade"
                                                        type="tel"
                                                        name="expiry"
                                                        pattern="\d\d/\d\d"
                                                        value={expiry}
                                                        onChange={(e) => {
                                                            const value = formatExpirationDate(e.target.value);
                                                            setExpiry(value);
                                                            setFieldValue('expiry', value);
                                                        }}
                                                        onFocus={() => handleInputFocus('expiry')}
                                                    />
                                                )}
                                            />
                                            <ErrorMessage name="expiry" component="div" className="hasError" />
                                        </Grid>
                                        <Grid item xs={6} md={6}>
                                            <Field 
                                                name="cvv"
                                                children={({ field }) => (
                                                    <TextField
                                                        {...field}
                                                        style={{ width: '100%' }}
                                                        label="CVV"
                                                        type="tel"
                                                        name="cvv"
                                                        pattern="\d{3,4}"
                                                        value={cvv}
                                                        onChange={(e) => {
                                                            const value = formatCVC(e.target.value);
                                                            setCvv(value);
                                                            setFieldValue('cvv', value);
                                                        }}
                                                        onFocus={() => handleInputFocus('cvc')}
                                                        onBlur={() => handleInputFocus('')}
                                                    />
                                                )}
                                            />
                                            <ErrorMessage name="cvv" component="div" className="hasError" />
                                        </Grid>
                                    </Grid>
                                    <Grid item style={{ marginTop: '10px', paddingBottom: '40px', maxHeight: '80px' }}>
                                        <Field
                                            name="parcelas"
                                            children={({field}) => (
                                                <Select
                                                    {...field}
                                                    native
                                                    label="Número de parcelas"
                                                    style={{width: '100%'}}
                                                >
                                                    <option value="">Número de parcelas</option>
                                                    <option value="1">1x 1000 Sem Juros</option>
                                                    <option value="2">2x 2000 Sem Juros</option>
                                                    <option value="3">3x 3000 Sem Juros</option>
                                                </Select>
                                            )}
                                        />
                                        <ErrorMessage name="parcelas" component="div" className="hasError" />
                                    </Grid>
                                    <Grid container className={classe.gridButton}>
                                        <Button type="submit" className={classe.button}>CONTINUAR</Button>
                                    </Grid>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </Grid>
            </Grid>
        </Grid>
    );
}