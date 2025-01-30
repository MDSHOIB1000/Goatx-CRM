import React from 'react';
import { QueryReverted } from './QueryReverted';
import Tabpackage from './Tabpackage';
import MakeQuary from './MakeQuary';

export const QueryPackagemain = () => {
  return (
    <div className="grid grid-cols-12 gap-4 p-4">
      <div className="col-span-3">
      <QueryReverted />
      </div>
      <div className="col-span-7">
      <Tabpackage />
      </div>
      <div className="col-span-2">
        <MakeQuary />
      </div>
    </div>
  );
};
