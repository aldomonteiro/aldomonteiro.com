// 'use strict';
import React, { useState } from 'react';
import { LanguageProvider } from "./src/context/LanguageContext"

require('./src/assets/scss/init.scss');

export const wrapRootElement = ({ element }) => {
  return (
    <LanguageProvider>
      {element}
    </LanguageProvider>
  )
}