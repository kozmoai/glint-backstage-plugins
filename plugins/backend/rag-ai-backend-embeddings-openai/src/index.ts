/*
 * Copyright 2024 Larder Software Limited
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { TokenManager } from '@backstage/backend-common';
import { Logger } from 'winston';
import { AugmentationIndexer, KozmoVectorStore } from '@kozmoai/rag-ai-node';
import { OpenAiConfig, KozmoOpenAiAugmenter } from './KozmoOpenAiAugmenter';
import { CatalogApi } from '@backstage/catalog-client';
import { PluginEndpointDiscovery } from '@backstage/backend-common';
import { Config } from '@backstage/config';
import { SplitterOptions } from '@kozmoai/rag-ai-backend-retrieval-augmenter';

export interface KozmoBedrockEmbeddingsConfig {
  logger: Logger;
  tokenManager: TokenManager;
  vectorStore: KozmoVectorStore;
  catalogApi: CatalogApi;
  discovery: PluginEndpointDiscovery;
  config: Config;
}

export async function initializeOpenAiEmbeddings({
  logger,
  tokenManager,
  vectorStore,
  catalogApi,
  discovery,
  config,
}: KozmoBedrockEmbeddingsConfig): Promise<AugmentationIndexer> {
  logger.info('Initializing Kozmo OpenAI Embeddings');
  const openAiConfig = config.get<OpenAiConfig>('ai.embeddings.openai');

  const embeddingsOptions = config.getOptionalConfig('ai.embeddings');
  const splitterOptions: SplitterOptions = {};
  if (embeddingsOptions) {
    splitterOptions.chunkSize =
      embeddingsOptions.getOptionalNumber('chunkSize');
    splitterOptions.chunkOverlap =
      embeddingsOptions.getOptionalNumber('chunkOverlap');
  }
  return new KozmoOpenAiAugmenter({
    vectorStore,
    catalogApi,
    discovery,
    splitterOptions,
    logger: logger.child({ label: 'kozmo-openai-embeddings' }),
    tokenManager,
    config: openAiConfig,
  });
}
