import { getApp } from "firebase/app";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";
import { isDevelopment } from 'common'

const functions = getFunctions(getApp());

if (isDevelopment) {
  connectFunctionsEmulator(functions, "localhost", 5001);
}