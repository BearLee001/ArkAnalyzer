#!/usr/bin/env node

import path from 'path';
import process from 'process';

import {
  Scene,
  SceneConfig,
} from '../src';
import {
  TiantAnalysisSolver
} from '../src/core/dataflow/TiantAnalysis'
const config = new SceneConfig();
config.buildFromProjectDir("/Users/bytedance/DemoMainIndex");
const scene = new Scene();
scene.buildSceneFromProjectDir(config);
