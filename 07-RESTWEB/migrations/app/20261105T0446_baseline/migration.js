#!/usr/bin/env -S node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const contract_json_1 = __importDefault(require("../../snapshots/2e28d88c943b0ba1d5a3833c7416dfa712a675fff1df6ff18d5e8a210ef424db/contract.json"));
const migration_1 = require("@prisma/orm-postgres/migration");
class M extends migration_1.Migration {
    endContractJson = contract_json_1.default;
    get operations() {
        return [
            this.createSchema({ schema: 'public' }),
            this.createTable({
                schema: 'public',
                table: 'Post',
                columns: [
                    (0, migration_1.col)('authorId', 'int4', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
                    (0, migration_1.col)('content', 'text', { codecRef: { codecId: 'pg/text@1' } }),
                    (0, migration_1.col)('createdAt', 'timestamptz(3)', {
                        notNull: true,
                        default: (0, migration_1.fn)((0, migration_1.sql) `now()`),
                        codecRef: { codecId: 'pg/timestamptz-date@1', typeParams: { precision: 3 } },
                    }),
                    (0, migration_1.col)('id', 'SERIAL', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
                    (0, migration_1.col)('title', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
                    (0, migration_1.col)('updatedAt', 'timestamptz(3)', {
                        notNull: true,
                        codecRef: { codecId: 'pg/timestamptz-date@1', typeParams: { precision: 3 } },
                    }),
                ],
                constraints: [(0, migration_1.primaryKey)(['id'])],
            }),
            this.createTable({
                schema: 'public',
                table: 'User',
                columns: [
                    (0, migration_1.col)('createdAt', 'timestamptz(3)', {
                        notNull: true,
                        default: (0, migration_1.fn)((0, migration_1.sql) `now()`),
                        codecRef: { codecId: 'pg/timestamptz-date@1', typeParams: { precision: 3 } },
                    }),
                    (0, migration_1.col)('email', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
                    (0, migration_1.col)('id', 'SERIAL', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
                    (0, migration_1.col)('name', 'text', { codecRef: { codecId: 'pg/text@1' } }),
                    (0, migration_1.col)('updatedAt', 'timestamptz(3)', {
                        notNull: true,
                        codecRef: { codecId: 'pg/timestamptz-date@1', typeParams: { precision: 3 } },
                    }),
                    (0, migration_1.col)('username', 'text', { codecRef: { codecId: 'pg/text@1' } }),
                ],
                constraints: [(0, migration_1.primaryKey)(['id'])],
            }),
            this.createTable({
                schema: 'public',
                table: 'todo',
                columns: [
                    (0, migration_1.col)('completedAt', 'timestamp', {
                        notNull: true,
                        codecRef: { codecId: 'pg/timestamp-date@1' },
                    }),
                    (0, migration_1.col)('id', 'SERIAL', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
                    (0, migration_1.col)('text', 'character varying(100)', {
                        notNull: true,
                        codecRef: { codecId: 'sql/varchar@1', typeParams: { length: 100 } },
                    }),
                ],
                constraints: [(0, migration_1.primaryKey)(['id'])],
            }),
            this.addUnique({
                schema: 'public',
                table: 'User',
                constraint: 'User_email_key',
                columns: ['email'],
            }),
            this.createIndex({
                schema: 'public',
                table: 'Post',
                index: 'Post_authorId_idx_e47547ed',
                columns: ['authorId'],
            }),
            this.addForeignKey({
                schema: 'public',
                table: 'Post',
                foreignKey: {
                    name: 'Post_authorId_fkey',
                    columns: ['authorId'],
                    references: { schema: 'public', table: 'User', columns: ['id'] },
                },
            }),
        ];
    }
}
exports.default = M;
migration_1.MigrationCLI.run(import.meta.url, M);
//# sourceMappingURL=migration.js.map