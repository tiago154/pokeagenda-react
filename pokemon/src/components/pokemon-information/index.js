import React from 'react'
import { Container, Description, ContainerStats, ContainerAbilities } from './styles';
import Stats from '../stats';
import Ability from '../ability';

export default ({ pokemon }) => {
    const { data, description, category, abilities } = pokemon;

    const mapAbilities = ability =>
        (<Ability key={ability.name} title={ability.name}>{ability.text.short_effect}</Ability>)

    return (
        <Container>
            <h2>Description :</h2>
            <Description>{description}</Description>
            <ContainerAbilities>
                <h2>Abilities :</h2>
                {abilities.length && abilities.map(mapAbilities)}
            </ContainerAbilities>
            <ContainerStats>
                <Stats value={data.weight} type='kg'>Weight</Stats>
                <Stats value={data.height} type='m'>Height</Stats>
                <Stats value={category}>Category</Stats>
            </ContainerStats>
        </Container>
    )
}