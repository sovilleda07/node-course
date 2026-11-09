#!/usr/bin/env -S node
import type { Contract as End } from '../../snapshots/065207e9d26e42f7d14a9cb12f3917c263b999a6c1d594705a7036f7ef6f6e2f/contract';
import endContract from '../../snapshots/065207e9d26e42f7d14a9cb12f3917c263b999a6c1d594705a7036f7ef6f6e2f/contract.json' with { type: 'json' };
import type { Contract as Start } from '../../snapshots/2e28d88c943b0ba1d5a3833c7416dfa712a675fff1df6ff18d5e8a210ef424db/contract';
import startContract from '../../snapshots/2e28d88c943b0ba1d5a3833c7416dfa712a675fff1df6ff18d5e8a210ef424db/contract.json' with { type: 'json' };
import { Migration, MigrationCLI } from '@prisma/orm-postgres/migration';

export default class M extends Migration<Start, End> {
  override readonly startContractJson = startContract;
  override readonly endContractJson = endContract;

  override get operations() {
    return [this.dropNotNull({ schema: 'public', table: 'todo', column: 'completedAt' })];
  }
}

MigrationCLI.run(import.meta.url, M);
