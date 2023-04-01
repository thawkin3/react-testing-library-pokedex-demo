import React from 'react'
import { makeStyles } from '@mui/styles'
import Paper from '@mui/material/Paper'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

const pokemonTypes = [
  'Bug',
  'Dark',
  'Dragon',
  'Electric',
  'Fairy',
  'Fighting',
  'Fire',
  'Flying',
  'Ghost',
  'Grass',
  'Ground',
  'Ice',
  'Normal',
  'Poison',
  'Psychic',
  'Rock',
  'Steel',
  'Water',
]

const useStyles = makeStyles((theme) => ({
  optionsContainer: {
    background: '#FFF',
    padding: `${8}px ${16}px`,
    borderRadius: 4,
    marginBottom: 16,
  },
  formControl: {
    margin: '8px !important',
    minWidth: '300px !important',
    background: '#FFF',
  },
}))

export function Filters({
  pokemonTypeFilter,
  setPokemonTypeFilter,
  capturedFilter,
  setCapturedFilter,
}) {
  const classes = useStyles()

  const handlePokemonTypeChange = (event) => {
    setPokemonTypeFilter(event.target.value)
  }

  const handleCapturedChange = (event) => {
    setCapturedFilter(event.target.value)
  }

  return (
    <Paper variant="outlined" className={classes.optionsContainer}>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel>Type</InputLabel>
        <Select
          value={pokemonTypeFilter}
          onChange={handlePokemonTypeChange}
          label="Type"
        >
          <MenuItem value="Any">Any</MenuItem>
          {pokemonTypes.map((type) => (
            <MenuItem value={type} key={type}>
              {type}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel>Captured</InputLabel>
        <Select
          value={capturedFilter}
          onChange={handleCapturedChange}
          label="Captured"
        >
          <MenuItem value="Any">Any</MenuItem>
          <MenuItem value="Captured">Captured</MenuItem>
          <MenuItem value="Not Captured">Not Captured</MenuItem>
        </Select>
      </FormControl>
    </Paper>
  )
}
