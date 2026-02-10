import React, { useState, useEffect } from 'react';
import { CheckCircle2, Circle } from 'lucide-react';

interface ChecklistProps {
  id: string;
  items: string[];
}

const Checklist: React.FC<ChecklistProps> = ({ id, items }) => {
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});

  useEffect(() => {
    const saved = localStorage.getItem(`checklist-${id}`);
    if (saved) {
      try {
        setCheckedItems(JSON.parse(saved));
      } catch (e) {
        console.error("Could not load checklist state", e);
      }
    }
  }, [id]);

  const toggleItem = (index: number) => {
    const newState = { ...checkedItems, [index]: !checkedItems[index] };
    setCheckedItems(newState);
    localStorage.setItem(`checklist-${id}`, JSON.stringify(newState));
  };

  return (
    <div className="space-y-2 mt-4">
      {items.map((item, idx) => (
        <button
          key={idx}
          onClick={() => toggleItem(idx)}
          className={`w-full flex items-start gap-3 p-3 rounded-xl border transition-all text-left group ${
            checkedItems[idx] 
              ? 'bg-emerald-50 border-emerald-200 text-emerald-800' 
              : 'bg-white border-slate-200 text-slate-600 hover:border-indigo-300'
          }`}
        >
          {checkedItems[idx] ? (
            <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
          ) : (
            <Circle className="w-5 h-5 text-slate-300 group-hover:text-indigo-400 shrink-0 mt-0.5" />
          )}
          <span className={`text-sm ${checkedItems[idx] ? 'line-through opacity-70' : ''}`}>
            {item}
          </span>
        </button>
      ))}
    </div>
  );
};

export default Checklist;