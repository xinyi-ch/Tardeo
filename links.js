const { Router } = require('express');
const express = require('express');
const pool = require('../database');

const db = require('../database');

Router.post('/add', async (req, res) =>{
    const{NombreEvento, DescripcionEvento, UbicacionEvento, FechaEvento, HoraEvento, CategoriaEvento} = req.body;
    const newEvent = {
        NombreEvento, 
        DescripcionEvento, 
        UbicacionEvento, 
        FechaEvento, 
        HoraEvento, 
        CategoriaEvento
    };
    await pool.query('INSERT INTO evento set ?', [newEvent]);
    res.send('received');
})