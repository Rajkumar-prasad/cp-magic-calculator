
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { pokemonData } from '@/data/pokemonData';
import { cpMultipliers } from '@/data/cpMultipliers';
import { PokemonResult } from '@/components/PokemonResult';
import { Search } from 'lucide-react';

const levelOptions = Array.from({ length: 98 }, (_, i) => {
  const level = (Math.floor(i / 2) + 1) + (i % 2 === 1 ? 0.5 : 0);
  return level <= 50 ? level.toString() : null;
}).filter(Boolean) as string[];

const CPCalculator = () => {
  const [selectedPokemon, setSelectedPokemon] = useState<string>("");
  const [level, setLevel] = useState<string>("20");
  const [attackIV, setAttackIV] = useState<number>(15);
  const [defenseIV, setDefenseIV] = useState<number>(15);
  const [staminaIV, setStaminaIV] = useState<number>(15);
  const [cp, setCP] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredPokemon, setFilteredPokemon] = useState(pokemonData);

  useEffect(() => {
    const filtered = pokemonData.filter(pokemon => 
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPokemon(filtered);
  }, [searchTerm]);

  const calculateCP = () => {
    const pokemon = pokemonData.find(p => p.name === selectedPokemon);
    if (!pokemon || !level) return;

    const cpm = cpMultipliers[level];
    
    const attack = pokemon.baseAttack + attackIV;
    const defense = pokemon.baseDefense + defenseIV;
    const stamina = pokemon.baseStamina + staminaIV;
    
    const calculatedCP = Math.floor(Math.max(10, (attack * Math.sqrt(defense) * Math.sqrt(stamina) * Math.pow(cpm, 2)) / 10));
    
    setCP(calculatedCP);
  };

  const handlePokemonChange = (value: string) => {
    setSelectedPokemon(value);
    setCP(null);
  };

  const handleLevelChange = (value: string) => {
    setLevel(value);
    setCP(null);
  };

  const handleIVChange = (
    value: number, 
    setter: React.Dispatch<React.SetStateAction<number>>
  ) => {
    setter(value);
    setCP(null);
  };

  return (
    <Card className="w-full max-w-xl mx-auto overflow-hidden bg-white shadow-lg">
      <CardHeader className="bg-pogo-red text-white">
        <CardTitle className="text-2xl font-bold text-center">Pokémon GO CP Calculator</CardTitle>
        <CardDescription className="text-white/80 text-center">
          Calculate the Combat Power (CP) of your Pokémon
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6 space-y-4">
        <div className="space-y-2">
          <Label htmlFor="pokemon-search">Search Pokémon</Label>
          <div className="relative">
            <Input
              id="pokemon-search"
              placeholder="Search for a Pokémon..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pr-10"
            />
            <Search className="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground" />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="pokemon">Pokémon</Label>
          <Select value={selectedPokemon} onValueChange={handlePokemonChange}>
            <SelectTrigger id="pokemon" className="w-full">
              <SelectValue placeholder="Select a Pokémon" />
            </SelectTrigger>
            <SelectContent className="max-h-80">
              {filteredPokemon.map((pokemon) => (
                <SelectItem key={pokemon.id} value={pokemon.name}>
                  {pokemon.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="level">Level: {level}</Label>
          <Select value={level} onValueChange={handleLevelChange}>
            <SelectTrigger id="level" className="w-full">
              <SelectValue placeholder="Select Level" />
            </SelectTrigger>
            <SelectContent className="max-h-80">
              {levelOptions.map((lvl) => (
                <SelectItem key={lvl} value={lvl}>
                  {lvl}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <Label htmlFor="attack-iv">Attack IV: {attackIV}</Label>
            <span className="text-sm text-muted-foreground">(0-15)</span>
          </div>
          <Slider
            id="attack-iv"
            min={0}
            max={15}
            step={1}
            value={[attackIV]}
            onValueChange={(value) => handleIVChange(value[0], setAttackIV)}
            className="py-2"
          />
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <Label htmlFor="defense-iv">Defense IV: {defenseIV}</Label>
            <span className="text-sm text-muted-foreground">(0-15)</span>
          </div>
          <Slider
            id="defense-iv"
            min={0}
            max={15}
            step={1}
            value={[defenseIV]}
            onValueChange={(value) => handleIVChange(value[0], setDefenseIV)}
            className="py-2"
          />
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <Label htmlFor="stamina-iv">Stamina IV: {staminaIV}</Label>
            <span className="text-sm text-muted-foreground">(0-15)</span>
          </div>
          <Slider
            id="stamina-iv"
            min={0}
            max={15}
            step={1}
            value={[staminaIV]}
            onValueChange={(value) => handleIVChange(value[0], setStaminaIV)}
            className="py-2"
          />
        </div>
      </CardContent>
      <CardFooter className="bg-gray-50 p-6 flex flex-col gap-4">
        <Button
          onClick={calculateCP}
          className="w-full bg-pogo-blue hover:bg-blue-700"
          disabled={!selectedPokemon || !level}
        >
          Calculate CP
        </Button>

        {selectedPokemon && (
          <PokemonResult 
            pokemonName={selectedPokemon}
            level={level}
            cp={cp}
            attackIV={attackIV}
            defenseIV={defenseIV}
            staminaIV={staminaIV}
          />
        )}
      </CardFooter>
    </Card>
  );
};

export default CPCalculator;
