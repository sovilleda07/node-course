#!/usr/bin/env -S node
import type { Contract as End } from '../../snapshots/2e28d88c943b0ba1d5a3833c7416dfa712a675fff1df6ff18d5e8a210ef424db/contract';
import { Migration } from '@prisma/orm-postgres/migration';
export default class M extends Migration<never, End> {
    readonly endContractJson: {
        _generated: {
            message: string;
            regenerate: string;
            warning: string;
        };
        capabilities: {
            postgres: {
                distinctOn: boolean;
                forKeyShare: boolean;
                forNoKeyUpdate: boolean;
                jsonAgg: boolean;
                lateral: boolean;
                limit: boolean;
                orderBy: boolean;
                returning: boolean;
            };
            sql: {
                checkConstraint: boolean;
                defaultInInsert: boolean;
                enums: boolean;
                forShare: boolean;
                forUpdate: boolean;
                insertOnConflictSkip: boolean;
                insertOnConflictWithoutTarget: boolean;
                lateral: boolean;
                lockNowait: boolean;
                lockOf: boolean;
                lockSkipLocked: boolean;
                returning: boolean;
                scalarList: boolean;
            };
        };
        domain: {
            namespaces: {
                public: {
                    models: {
                        Post: {
                            fields: {
                                authorId: {
                                    nullable: boolean;
                                    type: {
                                        codecId: string;
                                        kind: string;
                                    };
                                };
                                content: {
                                    nullable: boolean;
                                    type: {
                                        codecId: string;
                                        kind: string;
                                    };
                                };
                                createdAt: {
                                    nullable: boolean;
                                    type: {
                                        codecId: string;
                                        kind: string;
                                        typeParams: {
                                            precision: number;
                                        };
                                    };
                                };
                                id: {
                                    nullable: boolean;
                                    type: {
                                        codecId: string;
                                        kind: string;
                                    };
                                };
                                title: {
                                    nullable: boolean;
                                    type: {
                                        codecId: string;
                                        kind: string;
                                    };
                                };
                                updatedAt: {
                                    nullable: boolean;
                                    type: {
                                        codecId: string;
                                        kind: string;
                                        typeParams: {
                                            precision: number;
                                        };
                                    };
                                };
                            };
                            relations: {
                                author: {
                                    cardinality: string;
                                    nullable: boolean;
                                    on: {
                                        localFields: string[];
                                        targetFields: string[];
                                    };
                                    to: {
                                        model: string;
                                        namespace: string;
                                    };
                                };
                            };
                            storage: {
                                fields: {
                                    authorId: {
                                        column: string;
                                    };
                                    content: {
                                        column: string;
                                    };
                                    createdAt: {
                                        column: string;
                                    };
                                    id: {
                                        column: string;
                                    };
                                    title: {
                                        column: string;
                                    };
                                    updatedAt: {
                                        column: string;
                                    };
                                };
                                namespaceId: string;
                                table: string;
                            };
                        };
                        User: {
                            fields: {
                                createdAt: {
                                    nullable: boolean;
                                    type: {
                                        codecId: string;
                                        kind: string;
                                        typeParams: {
                                            precision: number;
                                        };
                                    };
                                };
                                email: {
                                    nullable: boolean;
                                    type: {
                                        codecId: string;
                                        kind: string;
                                    };
                                };
                                id: {
                                    nullable: boolean;
                                    type: {
                                        codecId: string;
                                        kind: string;
                                    };
                                };
                                name: {
                                    nullable: boolean;
                                    type: {
                                        codecId: string;
                                        kind: string;
                                    };
                                };
                                updatedAt: {
                                    nullable: boolean;
                                    type: {
                                        codecId: string;
                                        kind: string;
                                        typeParams: {
                                            precision: number;
                                        };
                                    };
                                };
                                username: {
                                    nullable: boolean;
                                    type: {
                                        codecId: string;
                                        kind: string;
                                    };
                                };
                            };
                            relations: {
                                posts: {
                                    cardinality: string;
                                    on: {
                                        localFields: string[];
                                        targetFields: string[];
                                    };
                                    to: {
                                        model: string;
                                        namespace: string;
                                    };
                                };
                            };
                            storage: {
                                fields: {
                                    createdAt: {
                                        column: string;
                                    };
                                    email: {
                                        column: string;
                                    };
                                    id: {
                                        column: string;
                                    };
                                    name: {
                                        column: string;
                                    };
                                    updatedAt: {
                                        column: string;
                                    };
                                    username: {
                                        column: string;
                                    };
                                };
                                namespaceId: string;
                                table: string;
                            };
                        };
                        todo: {
                            fields: {
                                completedAt: {
                                    nullable: boolean;
                                    type: {
                                        codecId: string;
                                        kind: string;
                                    };
                                };
                                id: {
                                    nullable: boolean;
                                    type: {
                                        codecId: string;
                                        kind: string;
                                    };
                                };
                                text: {
                                    nullable: boolean;
                                    type: {
                                        codecId: string;
                                        kind: string;
                                        typeParams: {
                                            length: number;
                                        };
                                    };
                                };
                            };
                            relations: {};
                            storage: {
                                fields: {
                                    completedAt: {
                                        column: string;
                                    };
                                    id: {
                                        column: string;
                                    };
                                    text: {
                                        column: string;
                                    };
                                };
                                namespaceId: string;
                                table: string;
                            };
                        };
                    };
                };
            };
        };
        execution: {
            executionHash: string;
            mutations: {
                defaults: ({
                    onCreate: {
                        id: string;
                        kind: string;
                        params: {
                            precision: number;
                        };
                    };
                    ref: {
                        entry: string;
                        field: string;
                        namespace: string;
                    };
                    onUpdate?: never;
                } | {
                    onCreate: {
                        id: string;
                        kind: string;
                        params: {
                            precision: number;
                        };
                    };
                    onUpdate: {
                        id: string;
                        kind: string;
                        params: {
                            precision: number;
                        };
                    };
                    ref: {
                        entry: string;
                        field: string;
                        namespace: string;
                    };
                })[];
            };
        };
        extensions: {};
        meta: {};
        profileHash: string;
        roots: {
            Post: {
                model: string;
                namespace: string;
            };
            User: {
                model: string;
                namespace: string;
            };
            todo: {
                model: string;
                namespace: string;
            };
        };
        schemaVersion: string;
        storage: {
            namespaces: {
                public: {
                    entries: {
                        table: {
                            Post: {
                                columns: {
                                    authorId: {
                                        codecId: string;
                                        dataType: string;
                                        nullable: boolean;
                                    };
                                    content: {
                                        codecId: string;
                                        dataType: string;
                                        nullable: boolean;
                                    };
                                    createdAt: {
                                        codecId: string;
                                        dataType: string;
                                        default: {
                                            expression: string;
                                            kind: string;
                                        };
                                        nullable: boolean;
                                        typeParams: {
                                            precision: number;
                                        };
                                    };
                                    id: {
                                        codecId: string;
                                        dataType: string;
                                        default: {
                                            expression: string;
                                            kind: string;
                                        };
                                        nullable: boolean;
                                    };
                                    title: {
                                        codecId: string;
                                        dataType: string;
                                        nullable: boolean;
                                    };
                                    updatedAt: {
                                        codecId: string;
                                        dataType: string;
                                        nullable: boolean;
                                        typeParams: {
                                            precision: number;
                                        };
                                    };
                                };
                                foreignKeys: {
                                    index: {
                                        name: string;
                                    };
                                    source: {
                                        columns: string[];
                                        namespaceId: string;
                                        tableName: string;
                                    };
                                    target: {
                                        columns: string[];
                                        namespaceId: string;
                                        tableName: string;
                                    };
                                }[];
                                indexes: {
                                    columns: string[];
                                    name: string;
                                    prefix: string;
                                    unique: boolean;
                                }[];
                                primaryKey: {
                                    columns: string[];
                                };
                                uniques: never[];
                            };
                            User: {
                                columns: {
                                    createdAt: {
                                        codecId: string;
                                        dataType: string;
                                        default: {
                                            expression: string;
                                            kind: string;
                                        };
                                        nullable: boolean;
                                        typeParams: {
                                            precision: number;
                                        };
                                    };
                                    email: {
                                        codecId: string;
                                        dataType: string;
                                        nullable: boolean;
                                    };
                                    id: {
                                        codecId: string;
                                        dataType: string;
                                        default: {
                                            expression: string;
                                            kind: string;
                                        };
                                        nullable: boolean;
                                    };
                                    name: {
                                        codecId: string;
                                        dataType: string;
                                        nullable: boolean;
                                    };
                                    updatedAt: {
                                        codecId: string;
                                        dataType: string;
                                        nullable: boolean;
                                        typeParams: {
                                            precision: number;
                                        };
                                    };
                                    username: {
                                        codecId: string;
                                        dataType: string;
                                        nullable: boolean;
                                    };
                                };
                                foreignKeys: never[];
                                indexes: never[];
                                primaryKey: {
                                    columns: string[];
                                };
                                uniques: {
                                    columns: string[];
                                }[];
                            };
                            todo: {
                                columns: {
                                    completedAt: {
                                        codecId: string;
                                        dataType: string;
                                        nullable: boolean;
                                    };
                                    id: {
                                        codecId: string;
                                        dataType: string;
                                        default: {
                                            expression: string;
                                            kind: string;
                                        };
                                        nullable: boolean;
                                    };
                                    text: {
                                        codecId: string;
                                        dataType: string;
                                        nullable: boolean;
                                        typeParams: {
                                            length: number;
                                        };
                                    };
                                };
                                foreignKeys: never[];
                                indexes: never[];
                                primaryKey: {
                                    columns: string[];
                                };
                                uniques: never[];
                            };
                        };
                    };
                    id: string;
                    kind: string;
                };
            };
            storageHash: string;
        };
        target: string;
        targetFamily: string;
    };
    get operations(): Promise<import("@prisma/orm-family-sql/family/control", { with: { "resolution-mode": "import" } }).SqlMigrationPlanOperation<import("../../../node_modules/@prisma/orm-target-postgres/dist/planner-target-details-HkP4RrRO-D6VtK0jY.mjs", { with: { "resolution-mode": "import" } }).t>>[];
}
//# sourceMappingURL=migration.d.ts.map