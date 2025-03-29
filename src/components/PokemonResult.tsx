
import React from 'react';
import { pokemonData } from '@/data/pokemonData';
import { Badge } from "@/components/ui/badge";

interface PokemonResultProps {
  pokemonName: string;
  level: string;
  cp: number | null;
  attackIV: number;
  defenseIV: number;
  staminaIV: number;
}

export const PokemonResult: React.FC<PokemonResultProps> = ({
  pokemonName,
  level,
  cp,
  attackIV,
  defenseIV,
  staminaIV
}) => {
  const pokemon = pokemonData.find(p => p.name === pokemonName);
  
  if (!pokemon) return null;

  // Calculate IV percentage
  const ivTotal = attackIV + defenseIV + staminaIV;
  const ivPercentage = Math.round((ivTotal / 45) * 100);
  
  // Determine IV quality
  const getIvQuality = (percentage: number) => {
    if (percentage >= 90) return { text: "Amazing", color: "bg-green-500" };
    if (percentage >= 80) return { text: "Great", color: "bg-blue-500" };
    if (percentage >= 66) return { text: "Good", color: "bg-yellow-500" };
    return { text: "Not Great", color: "bg-red-500" };
  };
  
  const ivQuality = getIvQuality(ivPercentage);
  
  return (
    <div className="w-full bg-white rounded-lg shadow border border-gray-100 overflow-hidden">
      {!cp ? (
        <div className="flex items-center justify-center p-4 text-center text-gray-500">
          Click "Calculate CP" to see results
        </div>
      ) : (
        <>
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center space-x-3">
              <img 
                src={pokemon.imageUrl} 
                alt={pokemon.name} 
                className="w-16 h-16 object-contain"
              />
              <div>
                <h3 className="font-bold text-lg">{pokemon.name}</h3>
                <div className="flex space-x-1 mt-1">
                  {pokemon.types.map(type => (
                    <Badge key={type} variant="outline" className="text-xs">
                      {type}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500">Level</div>
              <div className="font-bold text-lg">{level}</div>
            </div>
          </div>
          
          <div className="p-4 bg-gray-50">
            <div className="flex justify-between">
              <div className="text-gray-500 text-sm">CP</div>
              <div className="font-bold text-3xl text-pogo-red">{cp}</div>
            </div>
            
            <div className="mt-4 grid grid-cols-3 gap-2">
              <div className="text-center">
                <div className="text-xs text-gray-500">Attack</div>
                <div className="font-semibold">{pokemon.baseAttack + attackIV}</div>
                <div className="text-xs text-gray-500">({pokemon.baseAttack} + {attackIV})</div>
              </div>
              <div className="text-center">
                <div className="text-xs text-gray-500">Defense</div>
                <div className="font-semibold">{pokemon.baseDefense + defenseIV}</div>
                <div className="text-xs text-gray-500">({pokemon.baseDefense} + {defenseIV})</div>
              </div>
              <div className="text-center">
                <div className="text-xs text-gray-500">Stamina</div>
                <div className="font-semibold">{pokemon.baseStamina + staminaIV}</div>
                <div className="text-xs text-gray-500">({pokemon.baseStamina} + {staminaIV})</div>
              </div>
            </div>
            
            <div className="mt-4">
              <div className="text-xs text-gray-500 mb-1">IV Quality: {ivPercentage}%</div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className={`${ivQuality.color} h-2 rounded-full`} 
                  style={{ width: `${ivPercentage}%` }}
                ></div>
              </div>
              <div className="text-right text-xs mt-1 font-medium">
                {ivQuality.text}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
