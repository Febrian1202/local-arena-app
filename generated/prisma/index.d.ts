
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Team
 * 
 */
export type Team = $Result.DefaultSelection<Prisma.$TeamPayload>
/**
 * Model Player
 * 
 */
export type Player = $Result.DefaultSelection<Prisma.$PlayerPayload>
/**
 * Model Tournament
 * 
 */
export type Tournament = $Result.DefaultSelection<Prisma.$TournamentPayload>
/**
 * Model Match
 * 
 */
export type Match = $Result.DefaultSelection<Prisma.$MatchPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  CAPTAIN: 'CAPTAIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const TournamentStatus: {
  UPCOMING: 'UPCOMING',
  ONGOING: 'ONGOING',
  COMPLETED: 'COMPLETED'
};

export type TournamentStatus = (typeof TournamentStatus)[keyof typeof TournamentStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type TournamentStatus = $Enums.TournamentStatus

export const TournamentStatus: typeof $Enums.TournamentStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.team`: Exposes CRUD operations for the **Team** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teams
    * const teams = await prisma.team.findMany()
    * ```
    */
  get team(): Prisma.TeamDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.player`: Exposes CRUD operations for the **Player** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Players
    * const players = await prisma.player.findMany()
    * ```
    */
  get player(): Prisma.PlayerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tournament`: Exposes CRUD operations for the **Tournament** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tournaments
    * const tournaments = await prisma.tournament.findMany()
    * ```
    */
  get tournament(): Prisma.TournamentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.match`: Exposes CRUD operations for the **Match** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Matches
    * const matches = await prisma.match.findMany()
    * ```
    */
  get match(): Prisma.MatchDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.4.2
   * Query Engine version: 94a226be1cf2967af2541cca5529f0f7ba866919
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Team: 'Team',
    Player: 'Player',
    Tournament: 'Tournament',
    Match: 'Match'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "team" | "player" | "tournament" | "match"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Team: {
        payload: Prisma.$TeamPayload<ExtArgs>
        fields: Prisma.TeamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          findFirst: {
            args: Prisma.TeamFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          findMany: {
            args: Prisma.TeamFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          create: {
            args: Prisma.TeamCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          createMany: {
            args: Prisma.TeamCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeamCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          delete: {
            args: Prisma.TeamDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          update: {
            args: Prisma.TeamUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          deleteMany: {
            args: Prisma.TeamDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeamUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeamUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          upsert: {
            args: Prisma.TeamUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          aggregate: {
            args: Prisma.TeamAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeam>
          }
          groupBy: {
            args: Prisma.TeamGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeamGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeamCountArgs<ExtArgs>
            result: $Utils.Optional<TeamCountAggregateOutputType> | number
          }
        }
      }
      Player: {
        payload: Prisma.$PlayerPayload<ExtArgs>
        fields: Prisma.PlayerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlayerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlayerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          findFirst: {
            args: Prisma.PlayerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlayerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          findMany: {
            args: Prisma.PlayerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>[]
          }
          create: {
            args: Prisma.PlayerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          createMany: {
            args: Prisma.PlayerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlayerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>[]
          }
          delete: {
            args: Prisma.PlayerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          update: {
            args: Prisma.PlayerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          deleteMany: {
            args: Prisma.PlayerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlayerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlayerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>[]
          }
          upsert: {
            args: Prisma.PlayerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          aggregate: {
            args: Prisma.PlayerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlayer>
          }
          groupBy: {
            args: Prisma.PlayerGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlayerGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlayerCountArgs<ExtArgs>
            result: $Utils.Optional<PlayerCountAggregateOutputType> | number
          }
        }
      }
      Tournament: {
        payload: Prisma.$TournamentPayload<ExtArgs>
        fields: Prisma.TournamentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TournamentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TournamentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>
          }
          findFirst: {
            args: Prisma.TournamentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TournamentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>
          }
          findMany: {
            args: Prisma.TournamentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>[]
          }
          create: {
            args: Prisma.TournamentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>
          }
          createMany: {
            args: Prisma.TournamentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TournamentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>[]
          }
          delete: {
            args: Prisma.TournamentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>
          }
          update: {
            args: Prisma.TournamentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>
          }
          deleteMany: {
            args: Prisma.TournamentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TournamentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TournamentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>[]
          }
          upsert: {
            args: Prisma.TournamentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>
          }
          aggregate: {
            args: Prisma.TournamentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTournament>
          }
          groupBy: {
            args: Prisma.TournamentGroupByArgs<ExtArgs>
            result: $Utils.Optional<TournamentGroupByOutputType>[]
          }
          count: {
            args: Prisma.TournamentCountArgs<ExtArgs>
            result: $Utils.Optional<TournamentCountAggregateOutputType> | number
          }
        }
      }
      Match: {
        payload: Prisma.$MatchPayload<ExtArgs>
        fields: Prisma.MatchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MatchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MatchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          findFirst: {
            args: Prisma.MatchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MatchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          findMany: {
            args: Prisma.MatchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>[]
          }
          create: {
            args: Prisma.MatchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          createMany: {
            args: Prisma.MatchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MatchCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>[]
          }
          delete: {
            args: Prisma.MatchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          update: {
            args: Prisma.MatchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          deleteMany: {
            args: Prisma.MatchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MatchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MatchUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>[]
          }
          upsert: {
            args: Prisma.MatchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          aggregate: {
            args: Prisma.MatchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMatch>
          }
          groupBy: {
            args: Prisma.MatchGroupByArgs<ExtArgs>
            result: $Utils.Optional<MatchGroupByOutputType>[]
          }
          count: {
            args: Prisma.MatchCountArgs<ExtArgs>
            result: $Utils.Optional<MatchCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    team?: TeamOmit
    player?: PlayerOmit
    tournament?: TournamentOmit
    match?: MatchOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type TeamCountOutputType
   */

  export type TeamCountOutputType = {
    players: number
    tournaments: number
    matchesAsA: number
    matchesAsB: number
    matchesWon: number
  }

  export type TeamCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    players?: boolean | TeamCountOutputTypeCountPlayersArgs
    tournaments?: boolean | TeamCountOutputTypeCountTournamentsArgs
    matchesAsA?: boolean | TeamCountOutputTypeCountMatchesAsAArgs
    matchesAsB?: boolean | TeamCountOutputTypeCountMatchesAsBArgs
    matchesWon?: boolean | TeamCountOutputTypeCountMatchesWonArgs
  }

  // Custom InputTypes
  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamCountOutputType
     */
    select?: TeamCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountPlayersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerWhereInput
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountTournamentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TournamentWhereInput
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountMatchesAsAArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchWhereInput
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountMatchesAsBArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchWhereInput
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountMatchesWonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchWhereInput
  }


  /**
   * Count Type TournamentCountOutputType
   */

  export type TournamentCountOutputType = {
    teams: number
    matches: number
  }

  export type TournamentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teams?: boolean | TournamentCountOutputTypeCountTeamsArgs
    matches?: boolean | TournamentCountOutputTypeCountMatchesArgs
  }

  // Custom InputTypes
  /**
   * TournamentCountOutputType without action
   */
  export type TournamentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentCountOutputType
     */
    select?: TournamentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TournamentCountOutputType without action
   */
  export type TournamentCountOutputTypeCountTeamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamWhereInput
  }

  /**
   * TournamentCountOutputType without action
   */
  export type TournamentCountOutputTypeCountMatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchWhereInput
  }


  /**
   * Count Type MatchCountOutputType
   */

  export type MatchCountOutputType = {
    prevMatches: number
  }

  export type MatchCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prevMatches?: boolean | MatchCountOutputTypeCountPrevMatchesArgs
  }

  // Custom InputTypes
  /**
   * MatchCountOutputType without action
   */
  export type MatchCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchCountOutputType
     */
    select?: MatchCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MatchCountOutputType without action
   */
  export type MatchCountOutputTypeCountPrevMatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    team?: boolean | User$teamArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | User$teamArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      team: Prisma.$TeamPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    team<T extends User$teamArgs<ExtArgs> = {}>(args?: Subset<T, User$teamArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.team
   */
  export type User$teamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    where?: TeamWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Team
   */

  export type AggregateTeam = {
    _count: TeamCountAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  export type TeamMinAggregateOutputType = {
    id: string | null
    name: string | null
    logo: string | null
    captainId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TeamMaxAggregateOutputType = {
    id: string | null
    name: string | null
    logo: string | null
    captainId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TeamCountAggregateOutputType = {
    id: number
    name: number
    logo: number
    captainId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TeamMinAggregateInputType = {
    id?: true
    name?: true
    logo?: true
    captainId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TeamMaxAggregateInputType = {
    id?: true
    name?: true
    logo?: true
    captainId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TeamCountAggregateInputType = {
    id?: true
    name?: true
    logo?: true
    captainId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TeamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Team to aggregate.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Teams
    **/
    _count?: true | TeamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamMaxAggregateInputType
  }

  export type GetTeamAggregateType<T extends TeamAggregateArgs> = {
        [P in keyof T & keyof AggregateTeam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeam[P]>
      : GetScalarType<T[P], AggregateTeam[P]>
  }




  export type TeamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamWhereInput
    orderBy?: TeamOrderByWithAggregationInput | TeamOrderByWithAggregationInput[]
    by: TeamScalarFieldEnum[] | TeamScalarFieldEnum
    having?: TeamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamCountAggregateInputType | true
    _min?: TeamMinAggregateInputType
    _max?: TeamMaxAggregateInputType
  }

  export type TeamGroupByOutputType = {
    id: string
    name: string
    logo: string | null
    captainId: string
    createdAt: Date
    updatedAt: Date
    _count: TeamCountAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  type GetTeamGroupByPayload<T extends TeamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamGroupByOutputType[P]>
            : GetScalarType<T[P], TeamGroupByOutputType[P]>
        }
      >
    >


  export type TeamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    logo?: boolean
    captainId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    captain?: boolean | UserDefaultArgs<ExtArgs>
    players?: boolean | Team$playersArgs<ExtArgs>
    tournaments?: boolean | Team$tournamentsArgs<ExtArgs>
    matchesAsA?: boolean | Team$matchesAsAArgs<ExtArgs>
    matchesAsB?: boolean | Team$matchesAsBArgs<ExtArgs>
    matchesWon?: boolean | Team$matchesWonArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["team"]>

  export type TeamSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    logo?: boolean
    captainId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    captain?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["team"]>

  export type TeamSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    logo?: boolean
    captainId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    captain?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["team"]>

  export type TeamSelectScalar = {
    id?: boolean
    name?: boolean
    logo?: boolean
    captainId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TeamOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "logo" | "captainId" | "createdAt" | "updatedAt", ExtArgs["result"]["team"]>
  export type TeamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    captain?: boolean | UserDefaultArgs<ExtArgs>
    players?: boolean | Team$playersArgs<ExtArgs>
    tournaments?: boolean | Team$tournamentsArgs<ExtArgs>
    matchesAsA?: boolean | Team$matchesAsAArgs<ExtArgs>
    matchesAsB?: boolean | Team$matchesAsBArgs<ExtArgs>
    matchesWon?: boolean | Team$matchesWonArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TeamIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    captain?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TeamIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    captain?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TeamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Team"
    objects: {
      captain: Prisma.$UserPayload<ExtArgs>
      players: Prisma.$PlayerPayload<ExtArgs>[]
      tournaments: Prisma.$TournamentPayload<ExtArgs>[]
      matchesAsA: Prisma.$MatchPayload<ExtArgs>[]
      matchesAsB: Prisma.$MatchPayload<ExtArgs>[]
      matchesWon: Prisma.$MatchPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      logo: string | null
      captainId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["team"]>
    composites: {}
  }

  type TeamGetPayload<S extends boolean | null | undefined | TeamDefaultArgs> = $Result.GetResult<Prisma.$TeamPayload, S>

  type TeamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeamFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeamCountAggregateInputType | true
    }

  export interface TeamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Team'], meta: { name: 'Team' } }
    /**
     * Find zero or one Team that matches the filter.
     * @param {TeamFindUniqueArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeamFindUniqueArgs>(args: SelectSubset<T, TeamFindUniqueArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Team that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeamFindUniqueOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeamFindUniqueOrThrowArgs>(args: SelectSubset<T, TeamFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Team that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeamFindFirstArgs>(args?: SelectSubset<T, TeamFindFirstArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Team that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeamFindFirstOrThrowArgs>(args?: SelectSubset<T, TeamFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Teams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teams
     * const teams = await prisma.team.findMany()
     * 
     * // Get first 10 Teams
     * const teams = await prisma.team.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamWithIdOnly = await prisma.team.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeamFindManyArgs>(args?: SelectSubset<T, TeamFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Team.
     * @param {TeamCreateArgs} args - Arguments to create a Team.
     * @example
     * // Create one Team
     * const Team = await prisma.team.create({
     *   data: {
     *     // ... data to create a Team
     *   }
     * })
     * 
     */
    create<T extends TeamCreateArgs>(args: SelectSubset<T, TeamCreateArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Teams.
     * @param {TeamCreateManyArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const team = await prisma.team.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeamCreateManyArgs>(args?: SelectSubset<T, TeamCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Teams and returns the data saved in the database.
     * @param {TeamCreateManyAndReturnArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const team = await prisma.team.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Teams and only return the `id`
     * const teamWithIdOnly = await prisma.team.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeamCreateManyAndReturnArgs>(args?: SelectSubset<T, TeamCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Team.
     * @param {TeamDeleteArgs} args - Arguments to delete one Team.
     * @example
     * // Delete one Team
     * const Team = await prisma.team.delete({
     *   where: {
     *     // ... filter to delete one Team
     *   }
     * })
     * 
     */
    delete<T extends TeamDeleteArgs>(args: SelectSubset<T, TeamDeleteArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Team.
     * @param {TeamUpdateArgs} args - Arguments to update one Team.
     * @example
     * // Update one Team
     * const team = await prisma.team.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeamUpdateArgs>(args: SelectSubset<T, TeamUpdateArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Teams.
     * @param {TeamDeleteManyArgs} args - Arguments to filter Teams to delete.
     * @example
     * // Delete a few Teams
     * const { count } = await prisma.team.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeamDeleteManyArgs>(args?: SelectSubset<T, TeamDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeamUpdateManyArgs>(args: SelectSubset<T, TeamUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams and returns the data updated in the database.
     * @param {TeamUpdateManyAndReturnArgs} args - Arguments to update many Teams.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Teams and only return the `id`
     * const teamWithIdOnly = await prisma.team.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TeamUpdateManyAndReturnArgs>(args: SelectSubset<T, TeamUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Team.
     * @param {TeamUpsertArgs} args - Arguments to update or create a Team.
     * @example
     * // Update or create a Team
     * const team = await prisma.team.upsert({
     *   create: {
     *     // ... data to create a Team
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Team we want to update
     *   }
     * })
     */
    upsert<T extends TeamUpsertArgs>(args: SelectSubset<T, TeamUpsertArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamCountArgs} args - Arguments to filter Teams to count.
     * @example
     * // Count the number of Teams
     * const count = await prisma.team.count({
     *   where: {
     *     // ... the filter for the Teams we want to count
     *   }
     * })
    **/
    count<T extends TeamCountArgs>(
      args?: Subset<T, TeamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TeamAggregateArgs>(args: Subset<T, TeamAggregateArgs>): Prisma.PrismaPromise<GetTeamAggregateType<T>>

    /**
     * Group by Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TeamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamGroupByArgs['orderBy'] }
        : { orderBy?: TeamGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TeamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Team model
   */
  readonly fields: TeamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Team.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    captain<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    players<T extends Team$playersArgs<ExtArgs> = {}>(args?: Subset<T, Team$playersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tournaments<T extends Team$tournamentsArgs<ExtArgs> = {}>(args?: Subset<T, Team$tournamentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    matchesAsA<T extends Team$matchesAsAArgs<ExtArgs> = {}>(args?: Subset<T, Team$matchesAsAArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    matchesAsB<T extends Team$matchesAsBArgs<ExtArgs> = {}>(args?: Subset<T, Team$matchesAsBArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    matchesWon<T extends Team$matchesWonArgs<ExtArgs> = {}>(args?: Subset<T, Team$matchesWonArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Team model
   */
  interface TeamFieldRefs {
    readonly id: FieldRef<"Team", 'String'>
    readonly name: FieldRef<"Team", 'String'>
    readonly logo: FieldRef<"Team", 'String'>
    readonly captainId: FieldRef<"Team", 'String'>
    readonly createdAt: FieldRef<"Team", 'DateTime'>
    readonly updatedAt: FieldRef<"Team", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Team findUnique
   */
  export type TeamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team findUniqueOrThrow
   */
  export type TeamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team findFirst
   */
  export type TeamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team findFirstOrThrow
   */
  export type TeamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team findMany
   */
  export type TeamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Teams to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team create
   */
  export type TeamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The data needed to create a Team.
     */
    data: XOR<TeamCreateInput, TeamUncheckedCreateInput>
  }

  /**
   * Team createMany
   */
  export type TeamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Teams.
     */
    data: TeamCreateManyInput | TeamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Team createManyAndReturn
   */
  export type TeamCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * The data used to create many Teams.
     */
    data: TeamCreateManyInput | TeamCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Team update
   */
  export type TeamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The data needed to update a Team.
     */
    data: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>
    /**
     * Choose, which Team to update.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team updateMany
   */
  export type TeamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Teams.
     */
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyInput>
    /**
     * Filter which Teams to update
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to update.
     */
    limit?: number
  }

  /**
   * Team updateManyAndReturn
   */
  export type TeamUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * The data used to update Teams.
     */
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyInput>
    /**
     * Filter which Teams to update
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Team upsert
   */
  export type TeamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The filter to search for the Team to update in case it exists.
     */
    where: TeamWhereUniqueInput
    /**
     * In case the Team found by the `where` argument doesn't exist, create a new Team with this data.
     */
    create: XOR<TeamCreateInput, TeamUncheckedCreateInput>
    /**
     * In case the Team was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>
  }

  /**
   * Team delete
   */
  export type TeamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter which Team to delete.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team deleteMany
   */
  export type TeamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teams to delete
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to delete.
     */
    limit?: number
  }

  /**
   * Team.players
   */
  export type Team$playersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    where?: PlayerWhereInput
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    cursor?: PlayerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlayerScalarFieldEnum | PlayerScalarFieldEnum[]
  }

  /**
   * Team.tournaments
   */
  export type Team$tournamentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    where?: TournamentWhereInput
    orderBy?: TournamentOrderByWithRelationInput | TournamentOrderByWithRelationInput[]
    cursor?: TournamentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TournamentScalarFieldEnum | TournamentScalarFieldEnum[]
  }

  /**
   * Team.matchesAsA
   */
  export type Team$matchesAsAArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    where?: MatchWhereInput
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    cursor?: MatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Team.matchesAsB
   */
  export type Team$matchesAsBArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    where?: MatchWhereInput
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    cursor?: MatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Team.matchesWon
   */
  export type Team$matchesWonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    where?: MatchWhereInput
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    cursor?: MatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Team without action
   */
  export type TeamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
  }


  /**
   * Model Player
   */

  export type AggregatePlayer = {
    _count: PlayerCountAggregateOutputType | null
    _min: PlayerMinAggregateOutputType | null
    _max: PlayerMaxAggregateOutputType | null
  }

  export type PlayerMinAggregateOutputType = {
    id: string | null
    nickname: string | null
    gameId: string | null
    role: string | null
    teamId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlayerMaxAggregateOutputType = {
    id: string | null
    nickname: string | null
    gameId: string | null
    role: string | null
    teamId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlayerCountAggregateOutputType = {
    id: number
    nickname: number
    gameId: number
    role: number
    teamId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PlayerMinAggregateInputType = {
    id?: true
    nickname?: true
    gameId?: true
    role?: true
    teamId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlayerMaxAggregateInputType = {
    id?: true
    nickname?: true
    gameId?: true
    role?: true
    teamId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlayerCountAggregateInputType = {
    id?: true
    nickname?: true
    gameId?: true
    role?: true
    teamId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PlayerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Player to aggregate.
     */
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Players
    **/
    _count?: true | PlayerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlayerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlayerMaxAggregateInputType
  }

  export type GetPlayerAggregateType<T extends PlayerAggregateArgs> = {
        [P in keyof T & keyof AggregatePlayer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlayer[P]>
      : GetScalarType<T[P], AggregatePlayer[P]>
  }




  export type PlayerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerWhereInput
    orderBy?: PlayerOrderByWithAggregationInput | PlayerOrderByWithAggregationInput[]
    by: PlayerScalarFieldEnum[] | PlayerScalarFieldEnum
    having?: PlayerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlayerCountAggregateInputType | true
    _min?: PlayerMinAggregateInputType
    _max?: PlayerMaxAggregateInputType
  }

  export type PlayerGroupByOutputType = {
    id: string
    nickname: string
    gameId: string
    role: string | null
    teamId: string
    createdAt: Date
    updatedAt: Date
    _count: PlayerCountAggregateOutputType | null
    _min: PlayerMinAggregateOutputType | null
    _max: PlayerMaxAggregateOutputType | null
  }

  type GetPlayerGroupByPayload<T extends PlayerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlayerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlayerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlayerGroupByOutputType[P]>
            : GetScalarType<T[P], PlayerGroupByOutputType[P]>
        }
      >
    >


  export type PlayerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nickname?: boolean
    gameId?: boolean
    role?: boolean
    teamId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["player"]>

  export type PlayerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nickname?: boolean
    gameId?: boolean
    role?: boolean
    teamId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["player"]>

  export type PlayerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nickname?: boolean
    gameId?: boolean
    role?: boolean
    teamId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["player"]>

  export type PlayerSelectScalar = {
    id?: boolean
    nickname?: boolean
    gameId?: boolean
    role?: boolean
    teamId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PlayerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nickname" | "gameId" | "role" | "teamId" | "createdAt" | "updatedAt", ExtArgs["result"]["player"]>
  export type PlayerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }
  export type PlayerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }
  export type PlayerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }

  export type $PlayerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Player"
    objects: {
      team: Prisma.$TeamPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nickname: string
      gameId: string
      role: string | null
      teamId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["player"]>
    composites: {}
  }

  type PlayerGetPayload<S extends boolean | null | undefined | PlayerDefaultArgs> = $Result.GetResult<Prisma.$PlayerPayload, S>

  type PlayerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlayerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlayerCountAggregateInputType | true
    }

  export interface PlayerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Player'], meta: { name: 'Player' } }
    /**
     * Find zero or one Player that matches the filter.
     * @param {PlayerFindUniqueArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlayerFindUniqueArgs>(args: SelectSubset<T, PlayerFindUniqueArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Player that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlayerFindUniqueOrThrowArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlayerFindUniqueOrThrowArgs>(args: SelectSubset<T, PlayerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Player that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerFindFirstArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlayerFindFirstArgs>(args?: SelectSubset<T, PlayerFindFirstArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Player that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerFindFirstOrThrowArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlayerFindFirstOrThrowArgs>(args?: SelectSubset<T, PlayerFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Players that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Players
     * const players = await prisma.player.findMany()
     * 
     * // Get first 10 Players
     * const players = await prisma.player.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playerWithIdOnly = await prisma.player.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlayerFindManyArgs>(args?: SelectSubset<T, PlayerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Player.
     * @param {PlayerCreateArgs} args - Arguments to create a Player.
     * @example
     * // Create one Player
     * const Player = await prisma.player.create({
     *   data: {
     *     // ... data to create a Player
     *   }
     * })
     * 
     */
    create<T extends PlayerCreateArgs>(args: SelectSubset<T, PlayerCreateArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Players.
     * @param {PlayerCreateManyArgs} args - Arguments to create many Players.
     * @example
     * // Create many Players
     * const player = await prisma.player.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlayerCreateManyArgs>(args?: SelectSubset<T, PlayerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Players and returns the data saved in the database.
     * @param {PlayerCreateManyAndReturnArgs} args - Arguments to create many Players.
     * @example
     * // Create many Players
     * const player = await prisma.player.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Players and only return the `id`
     * const playerWithIdOnly = await prisma.player.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlayerCreateManyAndReturnArgs>(args?: SelectSubset<T, PlayerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Player.
     * @param {PlayerDeleteArgs} args - Arguments to delete one Player.
     * @example
     * // Delete one Player
     * const Player = await prisma.player.delete({
     *   where: {
     *     // ... filter to delete one Player
     *   }
     * })
     * 
     */
    delete<T extends PlayerDeleteArgs>(args: SelectSubset<T, PlayerDeleteArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Player.
     * @param {PlayerUpdateArgs} args - Arguments to update one Player.
     * @example
     * // Update one Player
     * const player = await prisma.player.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlayerUpdateArgs>(args: SelectSubset<T, PlayerUpdateArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Players.
     * @param {PlayerDeleteManyArgs} args - Arguments to filter Players to delete.
     * @example
     * // Delete a few Players
     * const { count } = await prisma.player.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlayerDeleteManyArgs>(args?: SelectSubset<T, PlayerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Players
     * const player = await prisma.player.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlayerUpdateManyArgs>(args: SelectSubset<T, PlayerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Players and returns the data updated in the database.
     * @param {PlayerUpdateManyAndReturnArgs} args - Arguments to update many Players.
     * @example
     * // Update many Players
     * const player = await prisma.player.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Players and only return the `id`
     * const playerWithIdOnly = await prisma.player.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlayerUpdateManyAndReturnArgs>(args: SelectSubset<T, PlayerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Player.
     * @param {PlayerUpsertArgs} args - Arguments to update or create a Player.
     * @example
     * // Update or create a Player
     * const player = await prisma.player.upsert({
     *   create: {
     *     // ... data to create a Player
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Player we want to update
     *   }
     * })
     */
    upsert<T extends PlayerUpsertArgs>(args: SelectSubset<T, PlayerUpsertArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerCountArgs} args - Arguments to filter Players to count.
     * @example
     * // Count the number of Players
     * const count = await prisma.player.count({
     *   where: {
     *     // ... the filter for the Players we want to count
     *   }
     * })
    **/
    count<T extends PlayerCountArgs>(
      args?: Subset<T, PlayerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlayerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Player.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlayerAggregateArgs>(args: Subset<T, PlayerAggregateArgs>): Prisma.PrismaPromise<GetPlayerAggregateType<T>>

    /**
     * Group by Player.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlayerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlayerGroupByArgs['orderBy'] }
        : { orderBy?: PlayerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlayerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlayerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Player model
   */
  readonly fields: PlayerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Player.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlayerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    team<T extends TeamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamDefaultArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Player model
   */
  interface PlayerFieldRefs {
    readonly id: FieldRef<"Player", 'String'>
    readonly nickname: FieldRef<"Player", 'String'>
    readonly gameId: FieldRef<"Player", 'String'>
    readonly role: FieldRef<"Player", 'String'>
    readonly teamId: FieldRef<"Player", 'String'>
    readonly createdAt: FieldRef<"Player", 'DateTime'>
    readonly updatedAt: FieldRef<"Player", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Player findUnique
   */
  export type PlayerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Player to fetch.
     */
    where: PlayerWhereUniqueInput
  }

  /**
   * Player findUniqueOrThrow
   */
  export type PlayerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Player to fetch.
     */
    where: PlayerWhereUniqueInput
  }

  /**
   * Player findFirst
   */
  export type PlayerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Player to fetch.
     */
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Players.
     */
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Players.
     */
    distinct?: PlayerScalarFieldEnum | PlayerScalarFieldEnum[]
  }

  /**
   * Player findFirstOrThrow
   */
  export type PlayerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Player to fetch.
     */
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Players.
     */
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Players.
     */
    distinct?: PlayerScalarFieldEnum | PlayerScalarFieldEnum[]
  }

  /**
   * Player findMany
   */
  export type PlayerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Players to fetch.
     */
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Players.
     */
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    distinct?: PlayerScalarFieldEnum | PlayerScalarFieldEnum[]
  }

  /**
   * Player create
   */
  export type PlayerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * The data needed to create a Player.
     */
    data: XOR<PlayerCreateInput, PlayerUncheckedCreateInput>
  }

  /**
   * Player createMany
   */
  export type PlayerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Players.
     */
    data: PlayerCreateManyInput | PlayerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Player createManyAndReturn
   */
  export type PlayerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * The data used to create many Players.
     */
    data: PlayerCreateManyInput | PlayerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Player update
   */
  export type PlayerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * The data needed to update a Player.
     */
    data: XOR<PlayerUpdateInput, PlayerUncheckedUpdateInput>
    /**
     * Choose, which Player to update.
     */
    where: PlayerWhereUniqueInput
  }

  /**
   * Player updateMany
   */
  export type PlayerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Players.
     */
    data: XOR<PlayerUpdateManyMutationInput, PlayerUncheckedUpdateManyInput>
    /**
     * Filter which Players to update
     */
    where?: PlayerWhereInput
    /**
     * Limit how many Players to update.
     */
    limit?: number
  }

  /**
   * Player updateManyAndReturn
   */
  export type PlayerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * The data used to update Players.
     */
    data: XOR<PlayerUpdateManyMutationInput, PlayerUncheckedUpdateManyInput>
    /**
     * Filter which Players to update
     */
    where?: PlayerWhereInput
    /**
     * Limit how many Players to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Player upsert
   */
  export type PlayerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * The filter to search for the Player to update in case it exists.
     */
    where: PlayerWhereUniqueInput
    /**
     * In case the Player found by the `where` argument doesn't exist, create a new Player with this data.
     */
    create: XOR<PlayerCreateInput, PlayerUncheckedCreateInput>
    /**
     * In case the Player was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlayerUpdateInput, PlayerUncheckedUpdateInput>
  }

  /**
   * Player delete
   */
  export type PlayerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter which Player to delete.
     */
    where: PlayerWhereUniqueInput
  }

  /**
   * Player deleteMany
   */
  export type PlayerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Players to delete
     */
    where?: PlayerWhereInput
    /**
     * Limit how many Players to delete.
     */
    limit?: number
  }

  /**
   * Player without action
   */
  export type PlayerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
  }


  /**
   * Model Tournament
   */

  export type AggregateTournament = {
    _count: TournamentCountAggregateOutputType | null
    _avg: TournamentAvgAggregateOutputType | null
    _sum: TournamentSumAggregateOutputType | null
    _min: TournamentMinAggregateOutputType | null
    _max: TournamentMaxAggregateOutputType | null
  }

  export type TournamentAvgAggregateOutputType = {
    maxSlots: number | null
  }

  export type TournamentSumAggregateOutputType = {
    maxSlots: number | null
  }

  export type TournamentMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    prizePool: string | null
    maxSlots: number | null
    status: $Enums.TournamentStatus | null
    startDate: Date | null
    endDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TournamentMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    prizePool: string | null
    maxSlots: number | null
    status: $Enums.TournamentStatus | null
    startDate: Date | null
    endDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TournamentCountAggregateOutputType = {
    id: number
    name: number
    description: number
    prizePool: number
    maxSlots: number
    status: number
    startDate: number
    endDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TournamentAvgAggregateInputType = {
    maxSlots?: true
  }

  export type TournamentSumAggregateInputType = {
    maxSlots?: true
  }

  export type TournamentMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    prizePool?: true
    maxSlots?: true
    status?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TournamentMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    prizePool?: true
    maxSlots?: true
    status?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TournamentCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    prizePool?: true
    maxSlots?: true
    status?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TournamentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tournament to aggregate.
     */
    where?: TournamentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tournaments to fetch.
     */
    orderBy?: TournamentOrderByWithRelationInput | TournamentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TournamentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tournaments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tournaments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tournaments
    **/
    _count?: true | TournamentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TournamentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TournamentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TournamentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TournamentMaxAggregateInputType
  }

  export type GetTournamentAggregateType<T extends TournamentAggregateArgs> = {
        [P in keyof T & keyof AggregateTournament]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTournament[P]>
      : GetScalarType<T[P], AggregateTournament[P]>
  }




  export type TournamentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TournamentWhereInput
    orderBy?: TournamentOrderByWithAggregationInput | TournamentOrderByWithAggregationInput[]
    by: TournamentScalarFieldEnum[] | TournamentScalarFieldEnum
    having?: TournamentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TournamentCountAggregateInputType | true
    _avg?: TournamentAvgAggregateInputType
    _sum?: TournamentSumAggregateInputType
    _min?: TournamentMinAggregateInputType
    _max?: TournamentMaxAggregateInputType
  }

  export type TournamentGroupByOutputType = {
    id: string
    name: string
    description: string | null
    prizePool: string | null
    maxSlots: number
    status: $Enums.TournamentStatus
    startDate: Date | null
    endDate: Date | null
    createdAt: Date
    updatedAt: Date
    _count: TournamentCountAggregateOutputType | null
    _avg: TournamentAvgAggregateOutputType | null
    _sum: TournamentSumAggregateOutputType | null
    _min: TournamentMinAggregateOutputType | null
    _max: TournamentMaxAggregateOutputType | null
  }

  type GetTournamentGroupByPayload<T extends TournamentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TournamentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TournamentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TournamentGroupByOutputType[P]>
            : GetScalarType<T[P], TournamentGroupByOutputType[P]>
        }
      >
    >


  export type TournamentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    prizePool?: boolean
    maxSlots?: boolean
    status?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    teams?: boolean | Tournament$teamsArgs<ExtArgs>
    matches?: boolean | Tournament$matchesArgs<ExtArgs>
    _count?: boolean | TournamentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tournament"]>

  export type TournamentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    prizePool?: boolean
    maxSlots?: boolean
    status?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tournament"]>

  export type TournamentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    prizePool?: boolean
    maxSlots?: boolean
    status?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tournament"]>

  export type TournamentSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    prizePool?: boolean
    maxSlots?: boolean
    status?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TournamentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "prizePool" | "maxSlots" | "status" | "startDate" | "endDate" | "createdAt" | "updatedAt", ExtArgs["result"]["tournament"]>
  export type TournamentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teams?: boolean | Tournament$teamsArgs<ExtArgs>
    matches?: boolean | Tournament$matchesArgs<ExtArgs>
    _count?: boolean | TournamentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TournamentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TournamentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TournamentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tournament"
    objects: {
      teams: Prisma.$TeamPayload<ExtArgs>[]
      matches: Prisma.$MatchPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      prizePool: string | null
      maxSlots: number
      status: $Enums.TournamentStatus
      startDate: Date | null
      endDate: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tournament"]>
    composites: {}
  }

  type TournamentGetPayload<S extends boolean | null | undefined | TournamentDefaultArgs> = $Result.GetResult<Prisma.$TournamentPayload, S>

  type TournamentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TournamentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TournamentCountAggregateInputType | true
    }

  export interface TournamentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tournament'], meta: { name: 'Tournament' } }
    /**
     * Find zero or one Tournament that matches the filter.
     * @param {TournamentFindUniqueArgs} args - Arguments to find a Tournament
     * @example
     * // Get one Tournament
     * const tournament = await prisma.tournament.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TournamentFindUniqueArgs>(args: SelectSubset<T, TournamentFindUniqueArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tournament that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TournamentFindUniqueOrThrowArgs} args - Arguments to find a Tournament
     * @example
     * // Get one Tournament
     * const tournament = await prisma.tournament.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TournamentFindUniqueOrThrowArgs>(args: SelectSubset<T, TournamentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tournament that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentFindFirstArgs} args - Arguments to find a Tournament
     * @example
     * // Get one Tournament
     * const tournament = await prisma.tournament.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TournamentFindFirstArgs>(args?: SelectSubset<T, TournamentFindFirstArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tournament that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentFindFirstOrThrowArgs} args - Arguments to find a Tournament
     * @example
     * // Get one Tournament
     * const tournament = await prisma.tournament.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TournamentFindFirstOrThrowArgs>(args?: SelectSubset<T, TournamentFindFirstOrThrowArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tournaments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tournaments
     * const tournaments = await prisma.tournament.findMany()
     * 
     * // Get first 10 Tournaments
     * const tournaments = await prisma.tournament.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tournamentWithIdOnly = await prisma.tournament.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TournamentFindManyArgs>(args?: SelectSubset<T, TournamentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tournament.
     * @param {TournamentCreateArgs} args - Arguments to create a Tournament.
     * @example
     * // Create one Tournament
     * const Tournament = await prisma.tournament.create({
     *   data: {
     *     // ... data to create a Tournament
     *   }
     * })
     * 
     */
    create<T extends TournamentCreateArgs>(args: SelectSubset<T, TournamentCreateArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tournaments.
     * @param {TournamentCreateManyArgs} args - Arguments to create many Tournaments.
     * @example
     * // Create many Tournaments
     * const tournament = await prisma.tournament.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TournamentCreateManyArgs>(args?: SelectSubset<T, TournamentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tournaments and returns the data saved in the database.
     * @param {TournamentCreateManyAndReturnArgs} args - Arguments to create many Tournaments.
     * @example
     * // Create many Tournaments
     * const tournament = await prisma.tournament.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tournaments and only return the `id`
     * const tournamentWithIdOnly = await prisma.tournament.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TournamentCreateManyAndReturnArgs>(args?: SelectSubset<T, TournamentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tournament.
     * @param {TournamentDeleteArgs} args - Arguments to delete one Tournament.
     * @example
     * // Delete one Tournament
     * const Tournament = await prisma.tournament.delete({
     *   where: {
     *     // ... filter to delete one Tournament
     *   }
     * })
     * 
     */
    delete<T extends TournamentDeleteArgs>(args: SelectSubset<T, TournamentDeleteArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tournament.
     * @param {TournamentUpdateArgs} args - Arguments to update one Tournament.
     * @example
     * // Update one Tournament
     * const tournament = await prisma.tournament.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TournamentUpdateArgs>(args: SelectSubset<T, TournamentUpdateArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tournaments.
     * @param {TournamentDeleteManyArgs} args - Arguments to filter Tournaments to delete.
     * @example
     * // Delete a few Tournaments
     * const { count } = await prisma.tournament.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TournamentDeleteManyArgs>(args?: SelectSubset<T, TournamentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tournaments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tournaments
     * const tournament = await prisma.tournament.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TournamentUpdateManyArgs>(args: SelectSubset<T, TournamentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tournaments and returns the data updated in the database.
     * @param {TournamentUpdateManyAndReturnArgs} args - Arguments to update many Tournaments.
     * @example
     * // Update many Tournaments
     * const tournament = await prisma.tournament.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tournaments and only return the `id`
     * const tournamentWithIdOnly = await prisma.tournament.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TournamentUpdateManyAndReturnArgs>(args: SelectSubset<T, TournamentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tournament.
     * @param {TournamentUpsertArgs} args - Arguments to update or create a Tournament.
     * @example
     * // Update or create a Tournament
     * const tournament = await prisma.tournament.upsert({
     *   create: {
     *     // ... data to create a Tournament
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tournament we want to update
     *   }
     * })
     */
    upsert<T extends TournamentUpsertArgs>(args: SelectSubset<T, TournamentUpsertArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tournaments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentCountArgs} args - Arguments to filter Tournaments to count.
     * @example
     * // Count the number of Tournaments
     * const count = await prisma.tournament.count({
     *   where: {
     *     // ... the filter for the Tournaments we want to count
     *   }
     * })
    **/
    count<T extends TournamentCountArgs>(
      args?: Subset<T, TournamentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TournamentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tournament.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TournamentAggregateArgs>(args: Subset<T, TournamentAggregateArgs>): Prisma.PrismaPromise<GetTournamentAggregateType<T>>

    /**
     * Group by Tournament.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TournamentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TournamentGroupByArgs['orderBy'] }
        : { orderBy?: TournamentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TournamentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTournamentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tournament model
   */
  readonly fields: TournamentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tournament.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TournamentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    teams<T extends Tournament$teamsArgs<ExtArgs> = {}>(args?: Subset<T, Tournament$teamsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    matches<T extends Tournament$matchesArgs<ExtArgs> = {}>(args?: Subset<T, Tournament$matchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tournament model
   */
  interface TournamentFieldRefs {
    readonly id: FieldRef<"Tournament", 'String'>
    readonly name: FieldRef<"Tournament", 'String'>
    readonly description: FieldRef<"Tournament", 'String'>
    readonly prizePool: FieldRef<"Tournament", 'String'>
    readonly maxSlots: FieldRef<"Tournament", 'Int'>
    readonly status: FieldRef<"Tournament", 'TournamentStatus'>
    readonly startDate: FieldRef<"Tournament", 'DateTime'>
    readonly endDate: FieldRef<"Tournament", 'DateTime'>
    readonly createdAt: FieldRef<"Tournament", 'DateTime'>
    readonly updatedAt: FieldRef<"Tournament", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tournament findUnique
   */
  export type TournamentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * Filter, which Tournament to fetch.
     */
    where: TournamentWhereUniqueInput
  }

  /**
   * Tournament findUniqueOrThrow
   */
  export type TournamentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * Filter, which Tournament to fetch.
     */
    where: TournamentWhereUniqueInput
  }

  /**
   * Tournament findFirst
   */
  export type TournamentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * Filter, which Tournament to fetch.
     */
    where?: TournamentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tournaments to fetch.
     */
    orderBy?: TournamentOrderByWithRelationInput | TournamentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tournaments.
     */
    cursor?: TournamentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tournaments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tournaments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tournaments.
     */
    distinct?: TournamentScalarFieldEnum | TournamentScalarFieldEnum[]
  }

  /**
   * Tournament findFirstOrThrow
   */
  export type TournamentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * Filter, which Tournament to fetch.
     */
    where?: TournamentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tournaments to fetch.
     */
    orderBy?: TournamentOrderByWithRelationInput | TournamentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tournaments.
     */
    cursor?: TournamentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tournaments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tournaments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tournaments.
     */
    distinct?: TournamentScalarFieldEnum | TournamentScalarFieldEnum[]
  }

  /**
   * Tournament findMany
   */
  export type TournamentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * Filter, which Tournaments to fetch.
     */
    where?: TournamentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tournaments to fetch.
     */
    orderBy?: TournamentOrderByWithRelationInput | TournamentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tournaments.
     */
    cursor?: TournamentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tournaments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tournaments.
     */
    skip?: number
    distinct?: TournamentScalarFieldEnum | TournamentScalarFieldEnum[]
  }

  /**
   * Tournament create
   */
  export type TournamentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * The data needed to create a Tournament.
     */
    data: XOR<TournamentCreateInput, TournamentUncheckedCreateInput>
  }

  /**
   * Tournament createMany
   */
  export type TournamentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tournaments.
     */
    data: TournamentCreateManyInput | TournamentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tournament createManyAndReturn
   */
  export type TournamentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * The data used to create many Tournaments.
     */
    data: TournamentCreateManyInput | TournamentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tournament update
   */
  export type TournamentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * The data needed to update a Tournament.
     */
    data: XOR<TournamentUpdateInput, TournamentUncheckedUpdateInput>
    /**
     * Choose, which Tournament to update.
     */
    where: TournamentWhereUniqueInput
  }

  /**
   * Tournament updateMany
   */
  export type TournamentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tournaments.
     */
    data: XOR<TournamentUpdateManyMutationInput, TournamentUncheckedUpdateManyInput>
    /**
     * Filter which Tournaments to update
     */
    where?: TournamentWhereInput
    /**
     * Limit how many Tournaments to update.
     */
    limit?: number
  }

  /**
   * Tournament updateManyAndReturn
   */
  export type TournamentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * The data used to update Tournaments.
     */
    data: XOR<TournamentUpdateManyMutationInput, TournamentUncheckedUpdateManyInput>
    /**
     * Filter which Tournaments to update
     */
    where?: TournamentWhereInput
    /**
     * Limit how many Tournaments to update.
     */
    limit?: number
  }

  /**
   * Tournament upsert
   */
  export type TournamentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * The filter to search for the Tournament to update in case it exists.
     */
    where: TournamentWhereUniqueInput
    /**
     * In case the Tournament found by the `where` argument doesn't exist, create a new Tournament with this data.
     */
    create: XOR<TournamentCreateInput, TournamentUncheckedCreateInput>
    /**
     * In case the Tournament was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TournamentUpdateInput, TournamentUncheckedUpdateInput>
  }

  /**
   * Tournament delete
   */
  export type TournamentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * Filter which Tournament to delete.
     */
    where: TournamentWhereUniqueInput
  }

  /**
   * Tournament deleteMany
   */
  export type TournamentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tournaments to delete
     */
    where?: TournamentWhereInput
    /**
     * Limit how many Tournaments to delete.
     */
    limit?: number
  }

  /**
   * Tournament.teams
   */
  export type Tournament$teamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    where?: TeamWhereInput
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    cursor?: TeamWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Tournament.matches
   */
  export type Tournament$matchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    where?: MatchWhereInput
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    cursor?: MatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Tournament without action
   */
  export type TournamentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
  }


  /**
   * Model Match
   */

  export type AggregateMatch = {
    _count: MatchCountAggregateOutputType | null
    _avg: MatchAvgAggregateOutputType | null
    _sum: MatchSumAggregateOutputType | null
    _min: MatchMinAggregateOutputType | null
    _max: MatchMaxAggregateOutputType | null
  }

  export type MatchAvgAggregateOutputType = {
    round: number | null
    matchNumber: number | null
    scoreA: number | null
    scoreB: number | null
  }

  export type MatchSumAggregateOutputType = {
    round: number | null
    matchNumber: number | null
    scoreA: number | null
    scoreB: number | null
  }

  export type MatchMinAggregateOutputType = {
    id: string | null
    tournamentId: string | null
    round: number | null
    matchNumber: number | null
    teamAId: string | null
    teamBId: string | null
    scoreA: number | null
    scoreB: number | null
    winnerId: string | null
    nextMatchId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MatchMaxAggregateOutputType = {
    id: string | null
    tournamentId: string | null
    round: number | null
    matchNumber: number | null
    teamAId: string | null
    teamBId: string | null
    scoreA: number | null
    scoreB: number | null
    winnerId: string | null
    nextMatchId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MatchCountAggregateOutputType = {
    id: number
    tournamentId: number
    round: number
    matchNumber: number
    teamAId: number
    teamBId: number
    scoreA: number
    scoreB: number
    winnerId: number
    nextMatchId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MatchAvgAggregateInputType = {
    round?: true
    matchNumber?: true
    scoreA?: true
    scoreB?: true
  }

  export type MatchSumAggregateInputType = {
    round?: true
    matchNumber?: true
    scoreA?: true
    scoreB?: true
  }

  export type MatchMinAggregateInputType = {
    id?: true
    tournamentId?: true
    round?: true
    matchNumber?: true
    teamAId?: true
    teamBId?: true
    scoreA?: true
    scoreB?: true
    winnerId?: true
    nextMatchId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MatchMaxAggregateInputType = {
    id?: true
    tournamentId?: true
    round?: true
    matchNumber?: true
    teamAId?: true
    teamBId?: true
    scoreA?: true
    scoreB?: true
    winnerId?: true
    nextMatchId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MatchCountAggregateInputType = {
    id?: true
    tournamentId?: true
    round?: true
    matchNumber?: true
    teamAId?: true
    teamBId?: true
    scoreA?: true
    scoreB?: true
    winnerId?: true
    nextMatchId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MatchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Match to aggregate.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Matches
    **/
    _count?: true | MatchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MatchAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MatchSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MatchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MatchMaxAggregateInputType
  }

  export type GetMatchAggregateType<T extends MatchAggregateArgs> = {
        [P in keyof T & keyof AggregateMatch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMatch[P]>
      : GetScalarType<T[P], AggregateMatch[P]>
  }




  export type MatchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchWhereInput
    orderBy?: MatchOrderByWithAggregationInput | MatchOrderByWithAggregationInput[]
    by: MatchScalarFieldEnum[] | MatchScalarFieldEnum
    having?: MatchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MatchCountAggregateInputType | true
    _avg?: MatchAvgAggregateInputType
    _sum?: MatchSumAggregateInputType
    _min?: MatchMinAggregateInputType
    _max?: MatchMaxAggregateInputType
  }

  export type MatchGroupByOutputType = {
    id: string
    tournamentId: string
    round: number
    matchNumber: number
    teamAId: string | null
    teamBId: string | null
    scoreA: number
    scoreB: number
    winnerId: string | null
    nextMatchId: string | null
    createdAt: Date
    updatedAt: Date
    _count: MatchCountAggregateOutputType | null
    _avg: MatchAvgAggregateOutputType | null
    _sum: MatchSumAggregateOutputType | null
    _min: MatchMinAggregateOutputType | null
    _max: MatchMaxAggregateOutputType | null
  }

  type GetMatchGroupByPayload<T extends MatchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MatchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MatchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MatchGroupByOutputType[P]>
            : GetScalarType<T[P], MatchGroupByOutputType[P]>
        }
      >
    >


  export type MatchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tournamentId?: boolean
    round?: boolean
    matchNumber?: boolean
    teamAId?: boolean
    teamBId?: boolean
    scoreA?: boolean
    scoreB?: boolean
    winnerId?: boolean
    nextMatchId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tournament?: boolean | TournamentDefaultArgs<ExtArgs>
    TeamA?: boolean | Match$TeamAArgs<ExtArgs>
    teamB?: boolean | Match$teamBArgs<ExtArgs>
    winner?: boolean | Match$winnerArgs<ExtArgs>
    nextMatch?: boolean | Match$nextMatchArgs<ExtArgs>
    prevMatches?: boolean | Match$prevMatchesArgs<ExtArgs>
    _count?: boolean | MatchCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["match"]>

  export type MatchSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tournamentId?: boolean
    round?: boolean
    matchNumber?: boolean
    teamAId?: boolean
    teamBId?: boolean
    scoreA?: boolean
    scoreB?: boolean
    winnerId?: boolean
    nextMatchId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tournament?: boolean | TournamentDefaultArgs<ExtArgs>
    TeamA?: boolean | Match$TeamAArgs<ExtArgs>
    teamB?: boolean | Match$teamBArgs<ExtArgs>
    winner?: boolean | Match$winnerArgs<ExtArgs>
    nextMatch?: boolean | Match$nextMatchArgs<ExtArgs>
  }, ExtArgs["result"]["match"]>

  export type MatchSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tournamentId?: boolean
    round?: boolean
    matchNumber?: boolean
    teamAId?: boolean
    teamBId?: boolean
    scoreA?: boolean
    scoreB?: boolean
    winnerId?: boolean
    nextMatchId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tournament?: boolean | TournamentDefaultArgs<ExtArgs>
    TeamA?: boolean | Match$TeamAArgs<ExtArgs>
    teamB?: boolean | Match$teamBArgs<ExtArgs>
    winner?: boolean | Match$winnerArgs<ExtArgs>
    nextMatch?: boolean | Match$nextMatchArgs<ExtArgs>
  }, ExtArgs["result"]["match"]>

  export type MatchSelectScalar = {
    id?: boolean
    tournamentId?: boolean
    round?: boolean
    matchNumber?: boolean
    teamAId?: boolean
    teamBId?: boolean
    scoreA?: boolean
    scoreB?: boolean
    winnerId?: boolean
    nextMatchId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MatchOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tournamentId" | "round" | "matchNumber" | "teamAId" | "teamBId" | "scoreA" | "scoreB" | "winnerId" | "nextMatchId" | "createdAt" | "updatedAt", ExtArgs["result"]["match"]>
  export type MatchInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tournament?: boolean | TournamentDefaultArgs<ExtArgs>
    TeamA?: boolean | Match$TeamAArgs<ExtArgs>
    teamB?: boolean | Match$teamBArgs<ExtArgs>
    winner?: boolean | Match$winnerArgs<ExtArgs>
    nextMatch?: boolean | Match$nextMatchArgs<ExtArgs>
    prevMatches?: boolean | Match$prevMatchesArgs<ExtArgs>
    _count?: boolean | MatchCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MatchIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tournament?: boolean | TournamentDefaultArgs<ExtArgs>
    TeamA?: boolean | Match$TeamAArgs<ExtArgs>
    teamB?: boolean | Match$teamBArgs<ExtArgs>
    winner?: boolean | Match$winnerArgs<ExtArgs>
    nextMatch?: boolean | Match$nextMatchArgs<ExtArgs>
  }
  export type MatchIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tournament?: boolean | TournamentDefaultArgs<ExtArgs>
    TeamA?: boolean | Match$TeamAArgs<ExtArgs>
    teamB?: boolean | Match$teamBArgs<ExtArgs>
    winner?: boolean | Match$winnerArgs<ExtArgs>
    nextMatch?: boolean | Match$nextMatchArgs<ExtArgs>
  }

  export type $MatchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Match"
    objects: {
      tournament: Prisma.$TournamentPayload<ExtArgs>
      TeamA: Prisma.$TeamPayload<ExtArgs> | null
      teamB: Prisma.$TeamPayload<ExtArgs> | null
      winner: Prisma.$TeamPayload<ExtArgs> | null
      nextMatch: Prisma.$MatchPayload<ExtArgs> | null
      prevMatches: Prisma.$MatchPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tournamentId: string
      round: number
      matchNumber: number
      teamAId: string | null
      teamBId: string | null
      scoreA: number
      scoreB: number
      winnerId: string | null
      nextMatchId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["match"]>
    composites: {}
  }

  type MatchGetPayload<S extends boolean | null | undefined | MatchDefaultArgs> = $Result.GetResult<Prisma.$MatchPayload, S>

  type MatchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MatchFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MatchCountAggregateInputType | true
    }

  export interface MatchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Match'], meta: { name: 'Match' } }
    /**
     * Find zero or one Match that matches the filter.
     * @param {MatchFindUniqueArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MatchFindUniqueArgs>(args: SelectSubset<T, MatchFindUniqueArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Match that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MatchFindUniqueOrThrowArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MatchFindUniqueOrThrowArgs>(args: SelectSubset<T, MatchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Match that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchFindFirstArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MatchFindFirstArgs>(args?: SelectSubset<T, MatchFindFirstArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Match that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchFindFirstOrThrowArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MatchFindFirstOrThrowArgs>(args?: SelectSubset<T, MatchFindFirstOrThrowArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Matches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Matches
     * const matches = await prisma.match.findMany()
     * 
     * // Get first 10 Matches
     * const matches = await prisma.match.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const matchWithIdOnly = await prisma.match.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MatchFindManyArgs>(args?: SelectSubset<T, MatchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Match.
     * @param {MatchCreateArgs} args - Arguments to create a Match.
     * @example
     * // Create one Match
     * const Match = await prisma.match.create({
     *   data: {
     *     // ... data to create a Match
     *   }
     * })
     * 
     */
    create<T extends MatchCreateArgs>(args: SelectSubset<T, MatchCreateArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Matches.
     * @param {MatchCreateManyArgs} args - Arguments to create many Matches.
     * @example
     * // Create many Matches
     * const match = await prisma.match.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MatchCreateManyArgs>(args?: SelectSubset<T, MatchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Matches and returns the data saved in the database.
     * @param {MatchCreateManyAndReturnArgs} args - Arguments to create many Matches.
     * @example
     * // Create many Matches
     * const match = await prisma.match.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Matches and only return the `id`
     * const matchWithIdOnly = await prisma.match.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MatchCreateManyAndReturnArgs>(args?: SelectSubset<T, MatchCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Match.
     * @param {MatchDeleteArgs} args - Arguments to delete one Match.
     * @example
     * // Delete one Match
     * const Match = await prisma.match.delete({
     *   where: {
     *     // ... filter to delete one Match
     *   }
     * })
     * 
     */
    delete<T extends MatchDeleteArgs>(args: SelectSubset<T, MatchDeleteArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Match.
     * @param {MatchUpdateArgs} args - Arguments to update one Match.
     * @example
     * // Update one Match
     * const match = await prisma.match.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MatchUpdateArgs>(args: SelectSubset<T, MatchUpdateArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Matches.
     * @param {MatchDeleteManyArgs} args - Arguments to filter Matches to delete.
     * @example
     * // Delete a few Matches
     * const { count } = await prisma.match.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MatchDeleteManyArgs>(args?: SelectSubset<T, MatchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Matches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Matches
     * const match = await prisma.match.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MatchUpdateManyArgs>(args: SelectSubset<T, MatchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Matches and returns the data updated in the database.
     * @param {MatchUpdateManyAndReturnArgs} args - Arguments to update many Matches.
     * @example
     * // Update many Matches
     * const match = await prisma.match.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Matches and only return the `id`
     * const matchWithIdOnly = await prisma.match.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MatchUpdateManyAndReturnArgs>(args: SelectSubset<T, MatchUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Match.
     * @param {MatchUpsertArgs} args - Arguments to update or create a Match.
     * @example
     * // Update or create a Match
     * const match = await prisma.match.upsert({
     *   create: {
     *     // ... data to create a Match
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Match we want to update
     *   }
     * })
     */
    upsert<T extends MatchUpsertArgs>(args: SelectSubset<T, MatchUpsertArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Matches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchCountArgs} args - Arguments to filter Matches to count.
     * @example
     * // Count the number of Matches
     * const count = await prisma.match.count({
     *   where: {
     *     // ... the filter for the Matches we want to count
     *   }
     * })
    **/
    count<T extends MatchCountArgs>(
      args?: Subset<T, MatchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MatchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Match.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MatchAggregateArgs>(args: Subset<T, MatchAggregateArgs>): Prisma.PrismaPromise<GetMatchAggregateType<T>>

    /**
     * Group by Match.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MatchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MatchGroupByArgs['orderBy'] }
        : { orderBy?: MatchGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MatchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Match model
   */
  readonly fields: MatchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Match.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MatchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tournament<T extends TournamentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TournamentDefaultArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    TeamA<T extends Match$TeamAArgs<ExtArgs> = {}>(args?: Subset<T, Match$TeamAArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    teamB<T extends Match$teamBArgs<ExtArgs> = {}>(args?: Subset<T, Match$teamBArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    winner<T extends Match$winnerArgs<ExtArgs> = {}>(args?: Subset<T, Match$winnerArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    nextMatch<T extends Match$nextMatchArgs<ExtArgs> = {}>(args?: Subset<T, Match$nextMatchArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    prevMatches<T extends Match$prevMatchesArgs<ExtArgs> = {}>(args?: Subset<T, Match$prevMatchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Match model
   */
  interface MatchFieldRefs {
    readonly id: FieldRef<"Match", 'String'>
    readonly tournamentId: FieldRef<"Match", 'String'>
    readonly round: FieldRef<"Match", 'Int'>
    readonly matchNumber: FieldRef<"Match", 'Int'>
    readonly teamAId: FieldRef<"Match", 'String'>
    readonly teamBId: FieldRef<"Match", 'String'>
    readonly scoreA: FieldRef<"Match", 'Int'>
    readonly scoreB: FieldRef<"Match", 'Int'>
    readonly winnerId: FieldRef<"Match", 'String'>
    readonly nextMatchId: FieldRef<"Match", 'String'>
    readonly createdAt: FieldRef<"Match", 'DateTime'>
    readonly updatedAt: FieldRef<"Match", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Match findUnique
   */
  export type MatchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where: MatchWhereUniqueInput
  }

  /**
   * Match findUniqueOrThrow
   */
  export type MatchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where: MatchWhereUniqueInput
  }

  /**
   * Match findFirst
   */
  export type MatchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Matches.
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Matches.
     */
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Match findFirstOrThrow
   */
  export type MatchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Matches.
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Matches.
     */
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Match findMany
   */
  export type MatchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Matches to fetch.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Matches.
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Match create
   */
  export type MatchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * The data needed to create a Match.
     */
    data: XOR<MatchCreateInput, MatchUncheckedCreateInput>
  }

  /**
   * Match createMany
   */
  export type MatchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Matches.
     */
    data: MatchCreateManyInput | MatchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Match createManyAndReturn
   */
  export type MatchCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * The data used to create many Matches.
     */
    data: MatchCreateManyInput | MatchCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Match update
   */
  export type MatchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * The data needed to update a Match.
     */
    data: XOR<MatchUpdateInput, MatchUncheckedUpdateInput>
    /**
     * Choose, which Match to update.
     */
    where: MatchWhereUniqueInput
  }

  /**
   * Match updateMany
   */
  export type MatchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Matches.
     */
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyInput>
    /**
     * Filter which Matches to update
     */
    where?: MatchWhereInput
    /**
     * Limit how many Matches to update.
     */
    limit?: number
  }

  /**
   * Match updateManyAndReturn
   */
  export type MatchUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * The data used to update Matches.
     */
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyInput>
    /**
     * Filter which Matches to update
     */
    where?: MatchWhereInput
    /**
     * Limit how many Matches to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Match upsert
   */
  export type MatchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * The filter to search for the Match to update in case it exists.
     */
    where: MatchWhereUniqueInput
    /**
     * In case the Match found by the `where` argument doesn't exist, create a new Match with this data.
     */
    create: XOR<MatchCreateInput, MatchUncheckedCreateInput>
    /**
     * In case the Match was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MatchUpdateInput, MatchUncheckedUpdateInput>
  }

  /**
   * Match delete
   */
  export type MatchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter which Match to delete.
     */
    where: MatchWhereUniqueInput
  }

  /**
   * Match deleteMany
   */
  export type MatchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Matches to delete
     */
    where?: MatchWhereInput
    /**
     * Limit how many Matches to delete.
     */
    limit?: number
  }

  /**
   * Match.TeamA
   */
  export type Match$TeamAArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    where?: TeamWhereInput
  }

  /**
   * Match.teamB
   */
  export type Match$teamBArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    where?: TeamWhereInput
  }

  /**
   * Match.winner
   */
  export type Match$winnerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    where?: TeamWhereInput
  }

  /**
   * Match.nextMatch
   */
  export type Match$nextMatchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    where?: MatchWhereInput
  }

  /**
   * Match.prevMatches
   */
  export type Match$prevMatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    where?: MatchWhereInput
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    cursor?: MatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Match without action
   */
  export type MatchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TeamScalarFieldEnum: {
    id: 'id',
    name: 'name',
    logo: 'logo',
    captainId: 'captainId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TeamScalarFieldEnum = (typeof TeamScalarFieldEnum)[keyof typeof TeamScalarFieldEnum]


  export const PlayerScalarFieldEnum: {
    id: 'id',
    nickname: 'nickname',
    gameId: 'gameId',
    role: 'role',
    teamId: 'teamId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PlayerScalarFieldEnum = (typeof PlayerScalarFieldEnum)[keyof typeof PlayerScalarFieldEnum]


  export const TournamentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    prizePool: 'prizePool',
    maxSlots: 'maxSlots',
    status: 'status',
    startDate: 'startDate',
    endDate: 'endDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TournamentScalarFieldEnum = (typeof TournamentScalarFieldEnum)[keyof typeof TournamentScalarFieldEnum]


  export const MatchScalarFieldEnum: {
    id: 'id',
    tournamentId: 'tournamentId',
    round: 'round',
    matchNumber: 'matchNumber',
    teamAId: 'teamAId',
    teamBId: 'teamBId',
    scoreA: 'scoreA',
    scoreB: 'scoreB',
    winnerId: 'winnerId',
    nextMatchId: 'nextMatchId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MatchScalarFieldEnum = (typeof MatchScalarFieldEnum)[keyof typeof MatchScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'TournamentStatus'
   */
  export type EnumTournamentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TournamentStatus'>
    


  /**
   * Reference to a field of type 'TournamentStatus[]'
   */
  export type ListEnumTournamentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TournamentStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    team?: XOR<TeamNullableScalarRelationFilter, TeamWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    team?: TeamOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    team?: XOR<TeamNullableScalarRelationFilter, TeamWhereInput> | null
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type TeamWhereInput = {
    AND?: TeamWhereInput | TeamWhereInput[]
    OR?: TeamWhereInput[]
    NOT?: TeamWhereInput | TeamWhereInput[]
    id?: StringFilter<"Team"> | string
    name?: StringFilter<"Team"> | string
    logo?: StringNullableFilter<"Team"> | string | null
    captainId?: StringFilter<"Team"> | string
    createdAt?: DateTimeFilter<"Team"> | Date | string
    updatedAt?: DateTimeFilter<"Team"> | Date | string
    captain?: XOR<UserScalarRelationFilter, UserWhereInput>
    players?: PlayerListRelationFilter
    tournaments?: TournamentListRelationFilter
    matchesAsA?: MatchListRelationFilter
    matchesAsB?: MatchListRelationFilter
    matchesWon?: MatchListRelationFilter
  }

  export type TeamOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    logo?: SortOrderInput | SortOrder
    captainId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    captain?: UserOrderByWithRelationInput
    players?: PlayerOrderByRelationAggregateInput
    tournaments?: TournamentOrderByRelationAggregateInput
    matchesAsA?: MatchOrderByRelationAggregateInput
    matchesAsB?: MatchOrderByRelationAggregateInput
    matchesWon?: MatchOrderByRelationAggregateInput
  }

  export type TeamWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    captainId?: string
    AND?: TeamWhereInput | TeamWhereInput[]
    OR?: TeamWhereInput[]
    NOT?: TeamWhereInput | TeamWhereInput[]
    logo?: StringNullableFilter<"Team"> | string | null
    createdAt?: DateTimeFilter<"Team"> | Date | string
    updatedAt?: DateTimeFilter<"Team"> | Date | string
    captain?: XOR<UserScalarRelationFilter, UserWhereInput>
    players?: PlayerListRelationFilter
    tournaments?: TournamentListRelationFilter
    matchesAsA?: MatchListRelationFilter
    matchesAsB?: MatchListRelationFilter
    matchesWon?: MatchListRelationFilter
  }, "id" | "name" | "captainId">

  export type TeamOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    logo?: SortOrderInput | SortOrder
    captainId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TeamCountOrderByAggregateInput
    _max?: TeamMaxOrderByAggregateInput
    _min?: TeamMinOrderByAggregateInput
  }

  export type TeamScalarWhereWithAggregatesInput = {
    AND?: TeamScalarWhereWithAggregatesInput | TeamScalarWhereWithAggregatesInput[]
    OR?: TeamScalarWhereWithAggregatesInput[]
    NOT?: TeamScalarWhereWithAggregatesInput | TeamScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Team"> | string
    name?: StringWithAggregatesFilter<"Team"> | string
    logo?: StringNullableWithAggregatesFilter<"Team"> | string | null
    captainId?: StringWithAggregatesFilter<"Team"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Team"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Team"> | Date | string
  }

  export type PlayerWhereInput = {
    AND?: PlayerWhereInput | PlayerWhereInput[]
    OR?: PlayerWhereInput[]
    NOT?: PlayerWhereInput | PlayerWhereInput[]
    id?: StringFilter<"Player"> | string
    nickname?: StringFilter<"Player"> | string
    gameId?: StringFilter<"Player"> | string
    role?: StringNullableFilter<"Player"> | string | null
    teamId?: StringFilter<"Player"> | string
    createdAt?: DateTimeFilter<"Player"> | Date | string
    updatedAt?: DateTimeFilter<"Player"> | Date | string
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
  }

  export type PlayerOrderByWithRelationInput = {
    id?: SortOrder
    nickname?: SortOrder
    gameId?: SortOrder
    role?: SortOrderInput | SortOrder
    teamId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    team?: TeamOrderByWithRelationInput
  }

  export type PlayerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PlayerWhereInput | PlayerWhereInput[]
    OR?: PlayerWhereInput[]
    NOT?: PlayerWhereInput | PlayerWhereInput[]
    nickname?: StringFilter<"Player"> | string
    gameId?: StringFilter<"Player"> | string
    role?: StringNullableFilter<"Player"> | string | null
    teamId?: StringFilter<"Player"> | string
    createdAt?: DateTimeFilter<"Player"> | Date | string
    updatedAt?: DateTimeFilter<"Player"> | Date | string
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
  }, "id">

  export type PlayerOrderByWithAggregationInput = {
    id?: SortOrder
    nickname?: SortOrder
    gameId?: SortOrder
    role?: SortOrderInput | SortOrder
    teamId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PlayerCountOrderByAggregateInput
    _max?: PlayerMaxOrderByAggregateInput
    _min?: PlayerMinOrderByAggregateInput
  }

  export type PlayerScalarWhereWithAggregatesInput = {
    AND?: PlayerScalarWhereWithAggregatesInput | PlayerScalarWhereWithAggregatesInput[]
    OR?: PlayerScalarWhereWithAggregatesInput[]
    NOT?: PlayerScalarWhereWithAggregatesInput | PlayerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Player"> | string
    nickname?: StringWithAggregatesFilter<"Player"> | string
    gameId?: StringWithAggregatesFilter<"Player"> | string
    role?: StringNullableWithAggregatesFilter<"Player"> | string | null
    teamId?: StringWithAggregatesFilter<"Player"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Player"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Player"> | Date | string
  }

  export type TournamentWhereInput = {
    AND?: TournamentWhereInput | TournamentWhereInput[]
    OR?: TournamentWhereInput[]
    NOT?: TournamentWhereInput | TournamentWhereInput[]
    id?: StringFilter<"Tournament"> | string
    name?: StringFilter<"Tournament"> | string
    description?: StringNullableFilter<"Tournament"> | string | null
    prizePool?: StringNullableFilter<"Tournament"> | string | null
    maxSlots?: IntFilter<"Tournament"> | number
    status?: EnumTournamentStatusFilter<"Tournament"> | $Enums.TournamentStatus
    startDate?: DateTimeNullableFilter<"Tournament"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Tournament"> | Date | string | null
    createdAt?: DateTimeFilter<"Tournament"> | Date | string
    updatedAt?: DateTimeFilter<"Tournament"> | Date | string
    teams?: TeamListRelationFilter
    matches?: MatchListRelationFilter
  }

  export type TournamentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    prizePool?: SortOrderInput | SortOrder
    maxSlots?: SortOrder
    status?: SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    teams?: TeamOrderByRelationAggregateInput
    matches?: MatchOrderByRelationAggregateInput
  }

  export type TournamentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TournamentWhereInput | TournamentWhereInput[]
    OR?: TournamentWhereInput[]
    NOT?: TournamentWhereInput | TournamentWhereInput[]
    name?: StringFilter<"Tournament"> | string
    description?: StringNullableFilter<"Tournament"> | string | null
    prizePool?: StringNullableFilter<"Tournament"> | string | null
    maxSlots?: IntFilter<"Tournament"> | number
    status?: EnumTournamentStatusFilter<"Tournament"> | $Enums.TournamentStatus
    startDate?: DateTimeNullableFilter<"Tournament"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Tournament"> | Date | string | null
    createdAt?: DateTimeFilter<"Tournament"> | Date | string
    updatedAt?: DateTimeFilter<"Tournament"> | Date | string
    teams?: TeamListRelationFilter
    matches?: MatchListRelationFilter
  }, "id">

  export type TournamentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    prizePool?: SortOrderInput | SortOrder
    maxSlots?: SortOrder
    status?: SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TournamentCountOrderByAggregateInput
    _avg?: TournamentAvgOrderByAggregateInput
    _max?: TournamentMaxOrderByAggregateInput
    _min?: TournamentMinOrderByAggregateInput
    _sum?: TournamentSumOrderByAggregateInput
  }

  export type TournamentScalarWhereWithAggregatesInput = {
    AND?: TournamentScalarWhereWithAggregatesInput | TournamentScalarWhereWithAggregatesInput[]
    OR?: TournamentScalarWhereWithAggregatesInput[]
    NOT?: TournamentScalarWhereWithAggregatesInput | TournamentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tournament"> | string
    name?: StringWithAggregatesFilter<"Tournament"> | string
    description?: StringNullableWithAggregatesFilter<"Tournament"> | string | null
    prizePool?: StringNullableWithAggregatesFilter<"Tournament"> | string | null
    maxSlots?: IntWithAggregatesFilter<"Tournament"> | number
    status?: EnumTournamentStatusWithAggregatesFilter<"Tournament"> | $Enums.TournamentStatus
    startDate?: DateTimeNullableWithAggregatesFilter<"Tournament"> | Date | string | null
    endDate?: DateTimeNullableWithAggregatesFilter<"Tournament"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Tournament"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Tournament"> | Date | string
  }

  export type MatchWhereInput = {
    AND?: MatchWhereInput | MatchWhereInput[]
    OR?: MatchWhereInput[]
    NOT?: MatchWhereInput | MatchWhereInput[]
    id?: StringFilter<"Match"> | string
    tournamentId?: StringFilter<"Match"> | string
    round?: IntFilter<"Match"> | number
    matchNumber?: IntFilter<"Match"> | number
    teamAId?: StringNullableFilter<"Match"> | string | null
    teamBId?: StringNullableFilter<"Match"> | string | null
    scoreA?: IntFilter<"Match"> | number
    scoreB?: IntFilter<"Match"> | number
    winnerId?: StringNullableFilter<"Match"> | string | null
    nextMatchId?: StringNullableFilter<"Match"> | string | null
    createdAt?: DateTimeFilter<"Match"> | Date | string
    updatedAt?: DateTimeFilter<"Match"> | Date | string
    tournament?: XOR<TournamentScalarRelationFilter, TournamentWhereInput>
    TeamA?: XOR<TeamNullableScalarRelationFilter, TeamWhereInput> | null
    teamB?: XOR<TeamNullableScalarRelationFilter, TeamWhereInput> | null
    winner?: XOR<TeamNullableScalarRelationFilter, TeamWhereInput> | null
    nextMatch?: XOR<MatchNullableScalarRelationFilter, MatchWhereInput> | null
    prevMatches?: MatchListRelationFilter
  }

  export type MatchOrderByWithRelationInput = {
    id?: SortOrder
    tournamentId?: SortOrder
    round?: SortOrder
    matchNumber?: SortOrder
    teamAId?: SortOrderInput | SortOrder
    teamBId?: SortOrderInput | SortOrder
    scoreA?: SortOrder
    scoreB?: SortOrder
    winnerId?: SortOrderInput | SortOrder
    nextMatchId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tournament?: TournamentOrderByWithRelationInput
    TeamA?: TeamOrderByWithRelationInput
    teamB?: TeamOrderByWithRelationInput
    winner?: TeamOrderByWithRelationInput
    nextMatch?: MatchOrderByWithRelationInput
    prevMatches?: MatchOrderByRelationAggregateInput
  }

  export type MatchWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MatchWhereInput | MatchWhereInput[]
    OR?: MatchWhereInput[]
    NOT?: MatchWhereInput | MatchWhereInput[]
    tournamentId?: StringFilter<"Match"> | string
    round?: IntFilter<"Match"> | number
    matchNumber?: IntFilter<"Match"> | number
    teamAId?: StringNullableFilter<"Match"> | string | null
    teamBId?: StringNullableFilter<"Match"> | string | null
    scoreA?: IntFilter<"Match"> | number
    scoreB?: IntFilter<"Match"> | number
    winnerId?: StringNullableFilter<"Match"> | string | null
    nextMatchId?: StringNullableFilter<"Match"> | string | null
    createdAt?: DateTimeFilter<"Match"> | Date | string
    updatedAt?: DateTimeFilter<"Match"> | Date | string
    tournament?: XOR<TournamentScalarRelationFilter, TournamentWhereInput>
    TeamA?: XOR<TeamNullableScalarRelationFilter, TeamWhereInput> | null
    teamB?: XOR<TeamNullableScalarRelationFilter, TeamWhereInput> | null
    winner?: XOR<TeamNullableScalarRelationFilter, TeamWhereInput> | null
    nextMatch?: XOR<MatchNullableScalarRelationFilter, MatchWhereInput> | null
    prevMatches?: MatchListRelationFilter
  }, "id">

  export type MatchOrderByWithAggregationInput = {
    id?: SortOrder
    tournamentId?: SortOrder
    round?: SortOrder
    matchNumber?: SortOrder
    teamAId?: SortOrderInput | SortOrder
    teamBId?: SortOrderInput | SortOrder
    scoreA?: SortOrder
    scoreB?: SortOrder
    winnerId?: SortOrderInput | SortOrder
    nextMatchId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MatchCountOrderByAggregateInput
    _avg?: MatchAvgOrderByAggregateInput
    _max?: MatchMaxOrderByAggregateInput
    _min?: MatchMinOrderByAggregateInput
    _sum?: MatchSumOrderByAggregateInput
  }

  export type MatchScalarWhereWithAggregatesInput = {
    AND?: MatchScalarWhereWithAggregatesInput | MatchScalarWhereWithAggregatesInput[]
    OR?: MatchScalarWhereWithAggregatesInput[]
    NOT?: MatchScalarWhereWithAggregatesInput | MatchScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Match"> | string
    tournamentId?: StringWithAggregatesFilter<"Match"> | string
    round?: IntWithAggregatesFilter<"Match"> | number
    matchNumber?: IntWithAggregatesFilter<"Match"> | number
    teamAId?: StringNullableWithAggregatesFilter<"Match"> | string | null
    teamBId?: StringNullableWithAggregatesFilter<"Match"> | string | null
    scoreA?: IntWithAggregatesFilter<"Match"> | number
    scoreB?: IntWithAggregatesFilter<"Match"> | number
    winnerId?: StringNullableWithAggregatesFilter<"Match"> | string | null
    nextMatchId?: StringNullableWithAggregatesFilter<"Match"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Match"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Match"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    team?: TeamCreateNestedOneWithoutCaptainInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    team?: TeamUncheckedCreateNestedOneWithoutCaptainInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamUpdateOneWithoutCaptainNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamUncheckedUpdateOneWithoutCaptainNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamCreateInput = {
    id?: string
    name: string
    logo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    captain: UserCreateNestedOneWithoutTeamInput
    players?: PlayerCreateNestedManyWithoutTeamInput
    tournaments?: TournamentCreateNestedManyWithoutTeamsInput
    matchesAsA?: MatchCreateNestedManyWithoutTeamAInput
    matchesAsB?: MatchCreateNestedManyWithoutTeamBInput
    matchesWon?: MatchCreateNestedManyWithoutWinnerInput
  }

  export type TeamUncheckedCreateInput = {
    id?: string
    name: string
    logo?: string | null
    captainId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    players?: PlayerUncheckedCreateNestedManyWithoutTeamInput
    tournaments?: TournamentUncheckedCreateNestedManyWithoutTeamsInput
    matchesAsA?: MatchUncheckedCreateNestedManyWithoutTeamAInput
    matchesAsB?: MatchUncheckedCreateNestedManyWithoutTeamBInput
    matchesWon?: MatchUncheckedCreateNestedManyWithoutWinnerInput
  }

  export type TeamUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    captain?: UserUpdateOneRequiredWithoutTeamNestedInput
    players?: PlayerUpdateManyWithoutTeamNestedInput
    tournaments?: TournamentUpdateManyWithoutTeamsNestedInput
    matchesAsA?: MatchUpdateManyWithoutTeamANestedInput
    matchesAsB?: MatchUpdateManyWithoutTeamBNestedInput
    matchesWon?: MatchUpdateManyWithoutWinnerNestedInput
  }

  export type TeamUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    captainId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    players?: PlayerUncheckedUpdateManyWithoutTeamNestedInput
    tournaments?: TournamentUncheckedUpdateManyWithoutTeamsNestedInput
    matchesAsA?: MatchUncheckedUpdateManyWithoutTeamANestedInput
    matchesAsB?: MatchUncheckedUpdateManyWithoutTeamBNestedInput
    matchesWon?: MatchUncheckedUpdateManyWithoutWinnerNestedInput
  }

  export type TeamCreateManyInput = {
    id?: string
    name: string
    logo?: string | null
    captainId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeamUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    captainId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerCreateInput = {
    id?: string
    nickname: string
    gameId: string
    role?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    team: TeamCreateNestedOneWithoutPlayersInput
  }

  export type PlayerUncheckedCreateInput = {
    id?: string
    nickname: string
    gameId: string
    role?: string | null
    teamId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlayerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamUpdateOneRequiredWithoutPlayersNestedInput
  }

  export type PlayerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    teamId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerCreateManyInput = {
    id?: string
    nickname: string
    gameId: string
    role?: string | null
    teamId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlayerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    teamId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TournamentCreateInput = {
    id?: string
    name: string
    description?: string | null
    prizePool?: string | null
    maxSlots?: number
    status?: $Enums.TournamentStatus
    startDate?: Date | string | null
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    teams?: TeamCreateNestedManyWithoutTournamentsInput
    matches?: MatchCreateNestedManyWithoutTournamentInput
  }

  export type TournamentUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    prizePool?: string | null
    maxSlots?: number
    status?: $Enums.TournamentStatus
    startDate?: Date | string | null
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    teams?: TeamUncheckedCreateNestedManyWithoutTournamentsInput
    matches?: MatchUncheckedCreateNestedManyWithoutTournamentInput
  }

  export type TournamentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    prizePool?: NullableStringFieldUpdateOperationsInput | string | null
    maxSlots?: IntFieldUpdateOperationsInput | number
    status?: EnumTournamentStatusFieldUpdateOperationsInput | $Enums.TournamentStatus
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teams?: TeamUpdateManyWithoutTournamentsNestedInput
    matches?: MatchUpdateManyWithoutTournamentNestedInput
  }

  export type TournamentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    prizePool?: NullableStringFieldUpdateOperationsInput | string | null
    maxSlots?: IntFieldUpdateOperationsInput | number
    status?: EnumTournamentStatusFieldUpdateOperationsInput | $Enums.TournamentStatus
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teams?: TeamUncheckedUpdateManyWithoutTournamentsNestedInput
    matches?: MatchUncheckedUpdateManyWithoutTournamentNestedInput
  }

  export type TournamentCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    prizePool?: string | null
    maxSlots?: number
    status?: $Enums.TournamentStatus
    startDate?: Date | string | null
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TournamentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    prizePool?: NullableStringFieldUpdateOperationsInput | string | null
    maxSlots?: IntFieldUpdateOperationsInput | number
    status?: EnumTournamentStatusFieldUpdateOperationsInput | $Enums.TournamentStatus
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TournamentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    prizePool?: NullableStringFieldUpdateOperationsInput | string | null
    maxSlots?: IntFieldUpdateOperationsInput | number
    status?: EnumTournamentStatusFieldUpdateOperationsInput | $Enums.TournamentStatus
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchCreateInput = {
    id?: string
    round: number
    matchNumber: number
    scoreA?: number
    scoreB?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tournament: TournamentCreateNestedOneWithoutMatchesInput
    TeamA?: TeamCreateNestedOneWithoutMatchesAsAInput
    teamB?: TeamCreateNestedOneWithoutMatchesAsBInput
    winner?: TeamCreateNestedOneWithoutMatchesWonInput
    nextMatch?: MatchCreateNestedOneWithoutPrevMatchesInput
    prevMatches?: MatchCreateNestedManyWithoutNextMatchInput
  }

  export type MatchUncheckedCreateInput = {
    id?: string
    tournamentId: string
    round: number
    matchNumber: number
    teamAId?: string | null
    teamBId?: string | null
    scoreA?: number
    scoreB?: number
    winnerId?: string | null
    nextMatchId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    prevMatches?: MatchUncheckedCreateNestedManyWithoutNextMatchInput
  }

  export type MatchUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    round?: IntFieldUpdateOperationsInput | number
    matchNumber?: IntFieldUpdateOperationsInput | number
    scoreA?: IntFieldUpdateOperationsInput | number
    scoreB?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tournament?: TournamentUpdateOneRequiredWithoutMatchesNestedInput
    TeamA?: TeamUpdateOneWithoutMatchesAsANestedInput
    teamB?: TeamUpdateOneWithoutMatchesAsBNestedInput
    winner?: TeamUpdateOneWithoutMatchesWonNestedInput
    nextMatch?: MatchUpdateOneWithoutPrevMatchesNestedInput
    prevMatches?: MatchUpdateManyWithoutNextMatchNestedInput
  }

  export type MatchUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tournamentId?: StringFieldUpdateOperationsInput | string
    round?: IntFieldUpdateOperationsInput | number
    matchNumber?: IntFieldUpdateOperationsInput | number
    teamAId?: NullableStringFieldUpdateOperationsInput | string | null
    teamBId?: NullableStringFieldUpdateOperationsInput | string | null
    scoreA?: IntFieldUpdateOperationsInput | number
    scoreB?: IntFieldUpdateOperationsInput | number
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    nextMatchId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prevMatches?: MatchUncheckedUpdateManyWithoutNextMatchNestedInput
  }

  export type MatchCreateManyInput = {
    id?: string
    tournamentId: string
    round: number
    matchNumber: number
    teamAId?: string | null
    teamBId?: string | null
    scoreA?: number
    scoreB?: number
    winnerId?: string | null
    nextMatchId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    round?: IntFieldUpdateOperationsInput | number
    matchNumber?: IntFieldUpdateOperationsInput | number
    scoreA?: IntFieldUpdateOperationsInput | number
    scoreB?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tournamentId?: StringFieldUpdateOperationsInput | string
    round?: IntFieldUpdateOperationsInput | number
    matchNumber?: IntFieldUpdateOperationsInput | number
    teamAId?: NullableStringFieldUpdateOperationsInput | string | null
    teamBId?: NullableStringFieldUpdateOperationsInput | string | null
    scoreA?: IntFieldUpdateOperationsInput | number
    scoreB?: IntFieldUpdateOperationsInput | number
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    nextMatchId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TeamNullableScalarRelationFilter = {
    is?: TeamWhereInput | null
    isNot?: TeamWhereInput | null
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PlayerListRelationFilter = {
    every?: PlayerWhereInput
    some?: PlayerWhereInput
    none?: PlayerWhereInput
  }

  export type TournamentListRelationFilter = {
    every?: TournamentWhereInput
    some?: TournamentWhereInput
    none?: TournamentWhereInput
  }

  export type MatchListRelationFilter = {
    every?: MatchWhereInput
    some?: MatchWhereInput
    none?: MatchWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PlayerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TournamentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MatchOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeamCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    logo?: SortOrder
    captainId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeamMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    logo?: SortOrder
    captainId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeamMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    logo?: SortOrder
    captainId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type TeamScalarRelationFilter = {
    is?: TeamWhereInput
    isNot?: TeamWhereInput
  }

  export type PlayerCountOrderByAggregateInput = {
    id?: SortOrder
    nickname?: SortOrder
    gameId?: SortOrder
    role?: SortOrder
    teamId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlayerMaxOrderByAggregateInput = {
    id?: SortOrder
    nickname?: SortOrder
    gameId?: SortOrder
    role?: SortOrder
    teamId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlayerMinOrderByAggregateInput = {
    id?: SortOrder
    nickname?: SortOrder
    gameId?: SortOrder
    role?: SortOrder
    teamId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumTournamentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TournamentStatus | EnumTournamentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TournamentStatus[] | ListEnumTournamentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TournamentStatus[] | ListEnumTournamentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTournamentStatusFilter<$PrismaModel> | $Enums.TournamentStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type TeamListRelationFilter = {
    every?: TeamWhereInput
    some?: TeamWhereInput
    none?: TeamWhereInput
  }

  export type TeamOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TournamentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    prizePool?: SortOrder
    maxSlots?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TournamentAvgOrderByAggregateInput = {
    maxSlots?: SortOrder
  }

  export type TournamentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    prizePool?: SortOrder
    maxSlots?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TournamentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    prizePool?: SortOrder
    maxSlots?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TournamentSumOrderByAggregateInput = {
    maxSlots?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumTournamentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TournamentStatus | EnumTournamentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TournamentStatus[] | ListEnumTournamentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TournamentStatus[] | ListEnumTournamentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTournamentStatusWithAggregatesFilter<$PrismaModel> | $Enums.TournamentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTournamentStatusFilter<$PrismaModel>
    _max?: NestedEnumTournamentStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type TournamentScalarRelationFilter = {
    is?: TournamentWhereInput
    isNot?: TournamentWhereInput
  }

  export type MatchNullableScalarRelationFilter = {
    is?: MatchWhereInput | null
    isNot?: MatchWhereInput | null
  }

  export type MatchCountOrderByAggregateInput = {
    id?: SortOrder
    tournamentId?: SortOrder
    round?: SortOrder
    matchNumber?: SortOrder
    teamAId?: SortOrder
    teamBId?: SortOrder
    scoreA?: SortOrder
    scoreB?: SortOrder
    winnerId?: SortOrder
    nextMatchId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MatchAvgOrderByAggregateInput = {
    round?: SortOrder
    matchNumber?: SortOrder
    scoreA?: SortOrder
    scoreB?: SortOrder
  }

  export type MatchMaxOrderByAggregateInput = {
    id?: SortOrder
    tournamentId?: SortOrder
    round?: SortOrder
    matchNumber?: SortOrder
    teamAId?: SortOrder
    teamBId?: SortOrder
    scoreA?: SortOrder
    scoreB?: SortOrder
    winnerId?: SortOrder
    nextMatchId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MatchMinOrderByAggregateInput = {
    id?: SortOrder
    tournamentId?: SortOrder
    round?: SortOrder
    matchNumber?: SortOrder
    teamAId?: SortOrder
    teamBId?: SortOrder
    scoreA?: SortOrder
    scoreB?: SortOrder
    winnerId?: SortOrder
    nextMatchId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MatchSumOrderByAggregateInput = {
    round?: SortOrder
    matchNumber?: SortOrder
    scoreA?: SortOrder
    scoreB?: SortOrder
  }

  export type TeamCreateNestedOneWithoutCaptainInput = {
    create?: XOR<TeamCreateWithoutCaptainInput, TeamUncheckedCreateWithoutCaptainInput>
    connectOrCreate?: TeamCreateOrConnectWithoutCaptainInput
    connect?: TeamWhereUniqueInput
  }

  export type TeamUncheckedCreateNestedOneWithoutCaptainInput = {
    create?: XOR<TeamCreateWithoutCaptainInput, TeamUncheckedCreateWithoutCaptainInput>
    connectOrCreate?: TeamCreateOrConnectWithoutCaptainInput
    connect?: TeamWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TeamUpdateOneWithoutCaptainNestedInput = {
    create?: XOR<TeamCreateWithoutCaptainInput, TeamUncheckedCreateWithoutCaptainInput>
    connectOrCreate?: TeamCreateOrConnectWithoutCaptainInput
    upsert?: TeamUpsertWithoutCaptainInput
    disconnect?: TeamWhereInput | boolean
    delete?: TeamWhereInput | boolean
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutCaptainInput, TeamUpdateWithoutCaptainInput>, TeamUncheckedUpdateWithoutCaptainInput>
  }

  export type TeamUncheckedUpdateOneWithoutCaptainNestedInput = {
    create?: XOR<TeamCreateWithoutCaptainInput, TeamUncheckedCreateWithoutCaptainInput>
    connectOrCreate?: TeamCreateOrConnectWithoutCaptainInput
    upsert?: TeamUpsertWithoutCaptainInput
    disconnect?: TeamWhereInput | boolean
    delete?: TeamWhereInput | boolean
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutCaptainInput, TeamUpdateWithoutCaptainInput>, TeamUncheckedUpdateWithoutCaptainInput>
  }

  export type UserCreateNestedOneWithoutTeamInput = {
    create?: XOR<UserCreateWithoutTeamInput, UserUncheckedCreateWithoutTeamInput>
    connectOrCreate?: UserCreateOrConnectWithoutTeamInput
    connect?: UserWhereUniqueInput
  }

  export type PlayerCreateNestedManyWithoutTeamInput = {
    create?: XOR<PlayerCreateWithoutTeamInput, PlayerUncheckedCreateWithoutTeamInput> | PlayerCreateWithoutTeamInput[] | PlayerUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: PlayerCreateOrConnectWithoutTeamInput | PlayerCreateOrConnectWithoutTeamInput[]
    createMany?: PlayerCreateManyTeamInputEnvelope
    connect?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
  }

  export type TournamentCreateNestedManyWithoutTeamsInput = {
    create?: XOR<TournamentCreateWithoutTeamsInput, TournamentUncheckedCreateWithoutTeamsInput> | TournamentCreateWithoutTeamsInput[] | TournamentUncheckedCreateWithoutTeamsInput[]
    connectOrCreate?: TournamentCreateOrConnectWithoutTeamsInput | TournamentCreateOrConnectWithoutTeamsInput[]
    connect?: TournamentWhereUniqueInput | TournamentWhereUniqueInput[]
  }

  export type MatchCreateNestedManyWithoutTeamAInput = {
    create?: XOR<MatchCreateWithoutTeamAInput, MatchUncheckedCreateWithoutTeamAInput> | MatchCreateWithoutTeamAInput[] | MatchUncheckedCreateWithoutTeamAInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutTeamAInput | MatchCreateOrConnectWithoutTeamAInput[]
    createMany?: MatchCreateManyTeamAInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type MatchCreateNestedManyWithoutTeamBInput = {
    create?: XOR<MatchCreateWithoutTeamBInput, MatchUncheckedCreateWithoutTeamBInput> | MatchCreateWithoutTeamBInput[] | MatchUncheckedCreateWithoutTeamBInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutTeamBInput | MatchCreateOrConnectWithoutTeamBInput[]
    createMany?: MatchCreateManyTeamBInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type MatchCreateNestedManyWithoutWinnerInput = {
    create?: XOR<MatchCreateWithoutWinnerInput, MatchUncheckedCreateWithoutWinnerInput> | MatchCreateWithoutWinnerInput[] | MatchUncheckedCreateWithoutWinnerInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutWinnerInput | MatchCreateOrConnectWithoutWinnerInput[]
    createMany?: MatchCreateManyWinnerInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type PlayerUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<PlayerCreateWithoutTeamInput, PlayerUncheckedCreateWithoutTeamInput> | PlayerCreateWithoutTeamInput[] | PlayerUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: PlayerCreateOrConnectWithoutTeamInput | PlayerCreateOrConnectWithoutTeamInput[]
    createMany?: PlayerCreateManyTeamInputEnvelope
    connect?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
  }

  export type TournamentUncheckedCreateNestedManyWithoutTeamsInput = {
    create?: XOR<TournamentCreateWithoutTeamsInput, TournamentUncheckedCreateWithoutTeamsInput> | TournamentCreateWithoutTeamsInput[] | TournamentUncheckedCreateWithoutTeamsInput[]
    connectOrCreate?: TournamentCreateOrConnectWithoutTeamsInput | TournamentCreateOrConnectWithoutTeamsInput[]
    connect?: TournamentWhereUniqueInput | TournamentWhereUniqueInput[]
  }

  export type MatchUncheckedCreateNestedManyWithoutTeamAInput = {
    create?: XOR<MatchCreateWithoutTeamAInput, MatchUncheckedCreateWithoutTeamAInput> | MatchCreateWithoutTeamAInput[] | MatchUncheckedCreateWithoutTeamAInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutTeamAInput | MatchCreateOrConnectWithoutTeamAInput[]
    createMany?: MatchCreateManyTeamAInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type MatchUncheckedCreateNestedManyWithoutTeamBInput = {
    create?: XOR<MatchCreateWithoutTeamBInput, MatchUncheckedCreateWithoutTeamBInput> | MatchCreateWithoutTeamBInput[] | MatchUncheckedCreateWithoutTeamBInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutTeamBInput | MatchCreateOrConnectWithoutTeamBInput[]
    createMany?: MatchCreateManyTeamBInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type MatchUncheckedCreateNestedManyWithoutWinnerInput = {
    create?: XOR<MatchCreateWithoutWinnerInput, MatchUncheckedCreateWithoutWinnerInput> | MatchCreateWithoutWinnerInput[] | MatchUncheckedCreateWithoutWinnerInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutWinnerInput | MatchCreateOrConnectWithoutWinnerInput[]
    createMany?: MatchCreateManyWinnerInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneRequiredWithoutTeamNestedInput = {
    create?: XOR<UserCreateWithoutTeamInput, UserUncheckedCreateWithoutTeamInput>
    connectOrCreate?: UserCreateOrConnectWithoutTeamInput
    upsert?: UserUpsertWithoutTeamInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTeamInput, UserUpdateWithoutTeamInput>, UserUncheckedUpdateWithoutTeamInput>
  }

  export type PlayerUpdateManyWithoutTeamNestedInput = {
    create?: XOR<PlayerCreateWithoutTeamInput, PlayerUncheckedCreateWithoutTeamInput> | PlayerCreateWithoutTeamInput[] | PlayerUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: PlayerCreateOrConnectWithoutTeamInput | PlayerCreateOrConnectWithoutTeamInput[]
    upsert?: PlayerUpsertWithWhereUniqueWithoutTeamInput | PlayerUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: PlayerCreateManyTeamInputEnvelope
    set?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    disconnect?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    delete?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    connect?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    update?: PlayerUpdateWithWhereUniqueWithoutTeamInput | PlayerUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: PlayerUpdateManyWithWhereWithoutTeamInput | PlayerUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: PlayerScalarWhereInput | PlayerScalarWhereInput[]
  }

  export type TournamentUpdateManyWithoutTeamsNestedInput = {
    create?: XOR<TournamentCreateWithoutTeamsInput, TournamentUncheckedCreateWithoutTeamsInput> | TournamentCreateWithoutTeamsInput[] | TournamentUncheckedCreateWithoutTeamsInput[]
    connectOrCreate?: TournamentCreateOrConnectWithoutTeamsInput | TournamentCreateOrConnectWithoutTeamsInput[]
    upsert?: TournamentUpsertWithWhereUniqueWithoutTeamsInput | TournamentUpsertWithWhereUniqueWithoutTeamsInput[]
    set?: TournamentWhereUniqueInput | TournamentWhereUniqueInput[]
    disconnect?: TournamentWhereUniqueInput | TournamentWhereUniqueInput[]
    delete?: TournamentWhereUniqueInput | TournamentWhereUniqueInput[]
    connect?: TournamentWhereUniqueInput | TournamentWhereUniqueInput[]
    update?: TournamentUpdateWithWhereUniqueWithoutTeamsInput | TournamentUpdateWithWhereUniqueWithoutTeamsInput[]
    updateMany?: TournamentUpdateManyWithWhereWithoutTeamsInput | TournamentUpdateManyWithWhereWithoutTeamsInput[]
    deleteMany?: TournamentScalarWhereInput | TournamentScalarWhereInput[]
  }

  export type MatchUpdateManyWithoutTeamANestedInput = {
    create?: XOR<MatchCreateWithoutTeamAInput, MatchUncheckedCreateWithoutTeamAInput> | MatchCreateWithoutTeamAInput[] | MatchUncheckedCreateWithoutTeamAInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutTeamAInput | MatchCreateOrConnectWithoutTeamAInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutTeamAInput | MatchUpsertWithWhereUniqueWithoutTeamAInput[]
    createMany?: MatchCreateManyTeamAInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutTeamAInput | MatchUpdateWithWhereUniqueWithoutTeamAInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutTeamAInput | MatchUpdateManyWithWhereWithoutTeamAInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type MatchUpdateManyWithoutTeamBNestedInput = {
    create?: XOR<MatchCreateWithoutTeamBInput, MatchUncheckedCreateWithoutTeamBInput> | MatchCreateWithoutTeamBInput[] | MatchUncheckedCreateWithoutTeamBInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutTeamBInput | MatchCreateOrConnectWithoutTeamBInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutTeamBInput | MatchUpsertWithWhereUniqueWithoutTeamBInput[]
    createMany?: MatchCreateManyTeamBInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutTeamBInput | MatchUpdateWithWhereUniqueWithoutTeamBInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutTeamBInput | MatchUpdateManyWithWhereWithoutTeamBInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type MatchUpdateManyWithoutWinnerNestedInput = {
    create?: XOR<MatchCreateWithoutWinnerInput, MatchUncheckedCreateWithoutWinnerInput> | MatchCreateWithoutWinnerInput[] | MatchUncheckedCreateWithoutWinnerInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutWinnerInput | MatchCreateOrConnectWithoutWinnerInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutWinnerInput | MatchUpsertWithWhereUniqueWithoutWinnerInput[]
    createMany?: MatchCreateManyWinnerInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutWinnerInput | MatchUpdateWithWhereUniqueWithoutWinnerInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutWinnerInput | MatchUpdateManyWithWhereWithoutWinnerInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type PlayerUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<PlayerCreateWithoutTeamInput, PlayerUncheckedCreateWithoutTeamInput> | PlayerCreateWithoutTeamInput[] | PlayerUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: PlayerCreateOrConnectWithoutTeamInput | PlayerCreateOrConnectWithoutTeamInput[]
    upsert?: PlayerUpsertWithWhereUniqueWithoutTeamInput | PlayerUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: PlayerCreateManyTeamInputEnvelope
    set?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    disconnect?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    delete?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    connect?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    update?: PlayerUpdateWithWhereUniqueWithoutTeamInput | PlayerUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: PlayerUpdateManyWithWhereWithoutTeamInput | PlayerUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: PlayerScalarWhereInput | PlayerScalarWhereInput[]
  }

  export type TournamentUncheckedUpdateManyWithoutTeamsNestedInput = {
    create?: XOR<TournamentCreateWithoutTeamsInput, TournamentUncheckedCreateWithoutTeamsInput> | TournamentCreateWithoutTeamsInput[] | TournamentUncheckedCreateWithoutTeamsInput[]
    connectOrCreate?: TournamentCreateOrConnectWithoutTeamsInput | TournamentCreateOrConnectWithoutTeamsInput[]
    upsert?: TournamentUpsertWithWhereUniqueWithoutTeamsInput | TournamentUpsertWithWhereUniqueWithoutTeamsInput[]
    set?: TournamentWhereUniqueInput | TournamentWhereUniqueInput[]
    disconnect?: TournamentWhereUniqueInput | TournamentWhereUniqueInput[]
    delete?: TournamentWhereUniqueInput | TournamentWhereUniqueInput[]
    connect?: TournamentWhereUniqueInput | TournamentWhereUniqueInput[]
    update?: TournamentUpdateWithWhereUniqueWithoutTeamsInput | TournamentUpdateWithWhereUniqueWithoutTeamsInput[]
    updateMany?: TournamentUpdateManyWithWhereWithoutTeamsInput | TournamentUpdateManyWithWhereWithoutTeamsInput[]
    deleteMany?: TournamentScalarWhereInput | TournamentScalarWhereInput[]
  }

  export type MatchUncheckedUpdateManyWithoutTeamANestedInput = {
    create?: XOR<MatchCreateWithoutTeamAInput, MatchUncheckedCreateWithoutTeamAInput> | MatchCreateWithoutTeamAInput[] | MatchUncheckedCreateWithoutTeamAInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutTeamAInput | MatchCreateOrConnectWithoutTeamAInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutTeamAInput | MatchUpsertWithWhereUniqueWithoutTeamAInput[]
    createMany?: MatchCreateManyTeamAInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutTeamAInput | MatchUpdateWithWhereUniqueWithoutTeamAInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutTeamAInput | MatchUpdateManyWithWhereWithoutTeamAInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type MatchUncheckedUpdateManyWithoutTeamBNestedInput = {
    create?: XOR<MatchCreateWithoutTeamBInput, MatchUncheckedCreateWithoutTeamBInput> | MatchCreateWithoutTeamBInput[] | MatchUncheckedCreateWithoutTeamBInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutTeamBInput | MatchCreateOrConnectWithoutTeamBInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutTeamBInput | MatchUpsertWithWhereUniqueWithoutTeamBInput[]
    createMany?: MatchCreateManyTeamBInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutTeamBInput | MatchUpdateWithWhereUniqueWithoutTeamBInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutTeamBInput | MatchUpdateManyWithWhereWithoutTeamBInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type MatchUncheckedUpdateManyWithoutWinnerNestedInput = {
    create?: XOR<MatchCreateWithoutWinnerInput, MatchUncheckedCreateWithoutWinnerInput> | MatchCreateWithoutWinnerInput[] | MatchUncheckedCreateWithoutWinnerInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutWinnerInput | MatchCreateOrConnectWithoutWinnerInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutWinnerInput | MatchUpsertWithWhereUniqueWithoutWinnerInput[]
    createMany?: MatchCreateManyWinnerInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutWinnerInput | MatchUpdateWithWhereUniqueWithoutWinnerInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutWinnerInput | MatchUpdateManyWithWhereWithoutWinnerInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type TeamCreateNestedOneWithoutPlayersInput = {
    create?: XOR<TeamCreateWithoutPlayersInput, TeamUncheckedCreateWithoutPlayersInput>
    connectOrCreate?: TeamCreateOrConnectWithoutPlayersInput
    connect?: TeamWhereUniqueInput
  }

  export type TeamUpdateOneRequiredWithoutPlayersNestedInput = {
    create?: XOR<TeamCreateWithoutPlayersInput, TeamUncheckedCreateWithoutPlayersInput>
    connectOrCreate?: TeamCreateOrConnectWithoutPlayersInput
    upsert?: TeamUpsertWithoutPlayersInput
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutPlayersInput, TeamUpdateWithoutPlayersInput>, TeamUncheckedUpdateWithoutPlayersInput>
  }

  export type TeamCreateNestedManyWithoutTournamentsInput = {
    create?: XOR<TeamCreateWithoutTournamentsInput, TeamUncheckedCreateWithoutTournamentsInput> | TeamCreateWithoutTournamentsInput[] | TeamUncheckedCreateWithoutTournamentsInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutTournamentsInput | TeamCreateOrConnectWithoutTournamentsInput[]
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
  }

  export type MatchCreateNestedManyWithoutTournamentInput = {
    create?: XOR<MatchCreateWithoutTournamentInput, MatchUncheckedCreateWithoutTournamentInput> | MatchCreateWithoutTournamentInput[] | MatchUncheckedCreateWithoutTournamentInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutTournamentInput | MatchCreateOrConnectWithoutTournamentInput[]
    createMany?: MatchCreateManyTournamentInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type TeamUncheckedCreateNestedManyWithoutTournamentsInput = {
    create?: XOR<TeamCreateWithoutTournamentsInput, TeamUncheckedCreateWithoutTournamentsInput> | TeamCreateWithoutTournamentsInput[] | TeamUncheckedCreateWithoutTournamentsInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutTournamentsInput | TeamCreateOrConnectWithoutTournamentsInput[]
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
  }

  export type MatchUncheckedCreateNestedManyWithoutTournamentInput = {
    create?: XOR<MatchCreateWithoutTournamentInput, MatchUncheckedCreateWithoutTournamentInput> | MatchCreateWithoutTournamentInput[] | MatchUncheckedCreateWithoutTournamentInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutTournamentInput | MatchCreateOrConnectWithoutTournamentInput[]
    createMany?: MatchCreateManyTournamentInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumTournamentStatusFieldUpdateOperationsInput = {
    set?: $Enums.TournamentStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type TeamUpdateManyWithoutTournamentsNestedInput = {
    create?: XOR<TeamCreateWithoutTournamentsInput, TeamUncheckedCreateWithoutTournamentsInput> | TeamCreateWithoutTournamentsInput[] | TeamUncheckedCreateWithoutTournamentsInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutTournamentsInput | TeamCreateOrConnectWithoutTournamentsInput[]
    upsert?: TeamUpsertWithWhereUniqueWithoutTournamentsInput | TeamUpsertWithWhereUniqueWithoutTournamentsInput[]
    set?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    disconnect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    delete?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    update?: TeamUpdateWithWhereUniqueWithoutTournamentsInput | TeamUpdateWithWhereUniqueWithoutTournamentsInput[]
    updateMany?: TeamUpdateManyWithWhereWithoutTournamentsInput | TeamUpdateManyWithWhereWithoutTournamentsInput[]
    deleteMany?: TeamScalarWhereInput | TeamScalarWhereInput[]
  }

  export type MatchUpdateManyWithoutTournamentNestedInput = {
    create?: XOR<MatchCreateWithoutTournamentInput, MatchUncheckedCreateWithoutTournamentInput> | MatchCreateWithoutTournamentInput[] | MatchUncheckedCreateWithoutTournamentInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutTournamentInput | MatchCreateOrConnectWithoutTournamentInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutTournamentInput | MatchUpsertWithWhereUniqueWithoutTournamentInput[]
    createMany?: MatchCreateManyTournamentInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutTournamentInput | MatchUpdateWithWhereUniqueWithoutTournamentInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutTournamentInput | MatchUpdateManyWithWhereWithoutTournamentInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type TeamUncheckedUpdateManyWithoutTournamentsNestedInput = {
    create?: XOR<TeamCreateWithoutTournamentsInput, TeamUncheckedCreateWithoutTournamentsInput> | TeamCreateWithoutTournamentsInput[] | TeamUncheckedCreateWithoutTournamentsInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutTournamentsInput | TeamCreateOrConnectWithoutTournamentsInput[]
    upsert?: TeamUpsertWithWhereUniqueWithoutTournamentsInput | TeamUpsertWithWhereUniqueWithoutTournamentsInput[]
    set?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    disconnect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    delete?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    update?: TeamUpdateWithWhereUniqueWithoutTournamentsInput | TeamUpdateWithWhereUniqueWithoutTournamentsInput[]
    updateMany?: TeamUpdateManyWithWhereWithoutTournamentsInput | TeamUpdateManyWithWhereWithoutTournamentsInput[]
    deleteMany?: TeamScalarWhereInput | TeamScalarWhereInput[]
  }

  export type MatchUncheckedUpdateManyWithoutTournamentNestedInput = {
    create?: XOR<MatchCreateWithoutTournamentInput, MatchUncheckedCreateWithoutTournamentInput> | MatchCreateWithoutTournamentInput[] | MatchUncheckedCreateWithoutTournamentInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutTournamentInput | MatchCreateOrConnectWithoutTournamentInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutTournamentInput | MatchUpsertWithWhereUniqueWithoutTournamentInput[]
    createMany?: MatchCreateManyTournamentInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutTournamentInput | MatchUpdateWithWhereUniqueWithoutTournamentInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutTournamentInput | MatchUpdateManyWithWhereWithoutTournamentInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type TournamentCreateNestedOneWithoutMatchesInput = {
    create?: XOR<TournamentCreateWithoutMatchesInput, TournamentUncheckedCreateWithoutMatchesInput>
    connectOrCreate?: TournamentCreateOrConnectWithoutMatchesInput
    connect?: TournamentWhereUniqueInput
  }

  export type TeamCreateNestedOneWithoutMatchesAsAInput = {
    create?: XOR<TeamCreateWithoutMatchesAsAInput, TeamUncheckedCreateWithoutMatchesAsAInput>
    connectOrCreate?: TeamCreateOrConnectWithoutMatchesAsAInput
    connect?: TeamWhereUniqueInput
  }

  export type TeamCreateNestedOneWithoutMatchesAsBInput = {
    create?: XOR<TeamCreateWithoutMatchesAsBInput, TeamUncheckedCreateWithoutMatchesAsBInput>
    connectOrCreate?: TeamCreateOrConnectWithoutMatchesAsBInput
    connect?: TeamWhereUniqueInput
  }

  export type TeamCreateNestedOneWithoutMatchesWonInput = {
    create?: XOR<TeamCreateWithoutMatchesWonInput, TeamUncheckedCreateWithoutMatchesWonInput>
    connectOrCreate?: TeamCreateOrConnectWithoutMatchesWonInput
    connect?: TeamWhereUniqueInput
  }

  export type MatchCreateNestedOneWithoutPrevMatchesInput = {
    create?: XOR<MatchCreateWithoutPrevMatchesInput, MatchUncheckedCreateWithoutPrevMatchesInput>
    connectOrCreate?: MatchCreateOrConnectWithoutPrevMatchesInput
    connect?: MatchWhereUniqueInput
  }

  export type MatchCreateNestedManyWithoutNextMatchInput = {
    create?: XOR<MatchCreateWithoutNextMatchInput, MatchUncheckedCreateWithoutNextMatchInput> | MatchCreateWithoutNextMatchInput[] | MatchUncheckedCreateWithoutNextMatchInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutNextMatchInput | MatchCreateOrConnectWithoutNextMatchInput[]
    createMany?: MatchCreateManyNextMatchInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type MatchUncheckedCreateNestedManyWithoutNextMatchInput = {
    create?: XOR<MatchCreateWithoutNextMatchInput, MatchUncheckedCreateWithoutNextMatchInput> | MatchCreateWithoutNextMatchInput[] | MatchUncheckedCreateWithoutNextMatchInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutNextMatchInput | MatchCreateOrConnectWithoutNextMatchInput[]
    createMany?: MatchCreateManyNextMatchInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type TournamentUpdateOneRequiredWithoutMatchesNestedInput = {
    create?: XOR<TournamentCreateWithoutMatchesInput, TournamentUncheckedCreateWithoutMatchesInput>
    connectOrCreate?: TournamentCreateOrConnectWithoutMatchesInput
    upsert?: TournamentUpsertWithoutMatchesInput
    connect?: TournamentWhereUniqueInput
    update?: XOR<XOR<TournamentUpdateToOneWithWhereWithoutMatchesInput, TournamentUpdateWithoutMatchesInput>, TournamentUncheckedUpdateWithoutMatchesInput>
  }

  export type TeamUpdateOneWithoutMatchesAsANestedInput = {
    create?: XOR<TeamCreateWithoutMatchesAsAInput, TeamUncheckedCreateWithoutMatchesAsAInput>
    connectOrCreate?: TeamCreateOrConnectWithoutMatchesAsAInput
    upsert?: TeamUpsertWithoutMatchesAsAInput
    disconnect?: TeamWhereInput | boolean
    delete?: TeamWhereInput | boolean
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutMatchesAsAInput, TeamUpdateWithoutMatchesAsAInput>, TeamUncheckedUpdateWithoutMatchesAsAInput>
  }

  export type TeamUpdateOneWithoutMatchesAsBNestedInput = {
    create?: XOR<TeamCreateWithoutMatchesAsBInput, TeamUncheckedCreateWithoutMatchesAsBInput>
    connectOrCreate?: TeamCreateOrConnectWithoutMatchesAsBInput
    upsert?: TeamUpsertWithoutMatchesAsBInput
    disconnect?: TeamWhereInput | boolean
    delete?: TeamWhereInput | boolean
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutMatchesAsBInput, TeamUpdateWithoutMatchesAsBInput>, TeamUncheckedUpdateWithoutMatchesAsBInput>
  }

  export type TeamUpdateOneWithoutMatchesWonNestedInput = {
    create?: XOR<TeamCreateWithoutMatchesWonInput, TeamUncheckedCreateWithoutMatchesWonInput>
    connectOrCreate?: TeamCreateOrConnectWithoutMatchesWonInput
    upsert?: TeamUpsertWithoutMatchesWonInput
    disconnect?: TeamWhereInput | boolean
    delete?: TeamWhereInput | boolean
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutMatchesWonInput, TeamUpdateWithoutMatchesWonInput>, TeamUncheckedUpdateWithoutMatchesWonInput>
  }

  export type MatchUpdateOneWithoutPrevMatchesNestedInput = {
    create?: XOR<MatchCreateWithoutPrevMatchesInput, MatchUncheckedCreateWithoutPrevMatchesInput>
    connectOrCreate?: MatchCreateOrConnectWithoutPrevMatchesInput
    upsert?: MatchUpsertWithoutPrevMatchesInput
    disconnect?: MatchWhereInput | boolean
    delete?: MatchWhereInput | boolean
    connect?: MatchWhereUniqueInput
    update?: XOR<XOR<MatchUpdateToOneWithWhereWithoutPrevMatchesInput, MatchUpdateWithoutPrevMatchesInput>, MatchUncheckedUpdateWithoutPrevMatchesInput>
  }

  export type MatchUpdateManyWithoutNextMatchNestedInput = {
    create?: XOR<MatchCreateWithoutNextMatchInput, MatchUncheckedCreateWithoutNextMatchInput> | MatchCreateWithoutNextMatchInput[] | MatchUncheckedCreateWithoutNextMatchInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutNextMatchInput | MatchCreateOrConnectWithoutNextMatchInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutNextMatchInput | MatchUpsertWithWhereUniqueWithoutNextMatchInput[]
    createMany?: MatchCreateManyNextMatchInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutNextMatchInput | MatchUpdateWithWhereUniqueWithoutNextMatchInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutNextMatchInput | MatchUpdateManyWithWhereWithoutNextMatchInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type MatchUncheckedUpdateManyWithoutNextMatchNestedInput = {
    create?: XOR<MatchCreateWithoutNextMatchInput, MatchUncheckedCreateWithoutNextMatchInput> | MatchCreateWithoutNextMatchInput[] | MatchUncheckedCreateWithoutNextMatchInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutNextMatchInput | MatchCreateOrConnectWithoutNextMatchInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutNextMatchInput | MatchUpsertWithWhereUniqueWithoutNextMatchInput[]
    createMany?: MatchCreateManyNextMatchInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutNextMatchInput | MatchUpdateWithWhereUniqueWithoutNextMatchInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutNextMatchInput | MatchUpdateManyWithWhereWithoutNextMatchInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumTournamentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TournamentStatus | EnumTournamentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TournamentStatus[] | ListEnumTournamentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TournamentStatus[] | ListEnumTournamentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTournamentStatusFilter<$PrismaModel> | $Enums.TournamentStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumTournamentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TournamentStatus | EnumTournamentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TournamentStatus[] | ListEnumTournamentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TournamentStatus[] | ListEnumTournamentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTournamentStatusWithAggregatesFilter<$PrismaModel> | $Enums.TournamentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTournamentStatusFilter<$PrismaModel>
    _max?: NestedEnumTournamentStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type TeamCreateWithoutCaptainInput = {
    id?: string
    name: string
    logo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    players?: PlayerCreateNestedManyWithoutTeamInput
    tournaments?: TournamentCreateNestedManyWithoutTeamsInput
    matchesAsA?: MatchCreateNestedManyWithoutTeamAInput
    matchesAsB?: MatchCreateNestedManyWithoutTeamBInput
    matchesWon?: MatchCreateNestedManyWithoutWinnerInput
  }

  export type TeamUncheckedCreateWithoutCaptainInput = {
    id?: string
    name: string
    logo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    players?: PlayerUncheckedCreateNestedManyWithoutTeamInput
    tournaments?: TournamentUncheckedCreateNestedManyWithoutTeamsInput
    matchesAsA?: MatchUncheckedCreateNestedManyWithoutTeamAInput
    matchesAsB?: MatchUncheckedCreateNestedManyWithoutTeamBInput
    matchesWon?: MatchUncheckedCreateNestedManyWithoutWinnerInput
  }

  export type TeamCreateOrConnectWithoutCaptainInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutCaptainInput, TeamUncheckedCreateWithoutCaptainInput>
  }

  export type TeamUpsertWithoutCaptainInput = {
    update: XOR<TeamUpdateWithoutCaptainInput, TeamUncheckedUpdateWithoutCaptainInput>
    create: XOR<TeamCreateWithoutCaptainInput, TeamUncheckedCreateWithoutCaptainInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutCaptainInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutCaptainInput, TeamUncheckedUpdateWithoutCaptainInput>
  }

  export type TeamUpdateWithoutCaptainInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    players?: PlayerUpdateManyWithoutTeamNestedInput
    tournaments?: TournamentUpdateManyWithoutTeamsNestedInput
    matchesAsA?: MatchUpdateManyWithoutTeamANestedInput
    matchesAsB?: MatchUpdateManyWithoutTeamBNestedInput
    matchesWon?: MatchUpdateManyWithoutWinnerNestedInput
  }

  export type TeamUncheckedUpdateWithoutCaptainInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    players?: PlayerUncheckedUpdateManyWithoutTeamNestedInput
    tournaments?: TournamentUncheckedUpdateManyWithoutTeamsNestedInput
    matchesAsA?: MatchUncheckedUpdateManyWithoutTeamANestedInput
    matchesAsB?: MatchUncheckedUpdateManyWithoutTeamBNestedInput
    matchesWon?: MatchUncheckedUpdateManyWithoutWinnerNestedInput
  }

  export type UserCreateWithoutTeamInput = {
    id?: string
    name: string
    email: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutTeamInput = {
    id?: string
    name: string
    email: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutTeamInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTeamInput, UserUncheckedCreateWithoutTeamInput>
  }

  export type PlayerCreateWithoutTeamInput = {
    id?: string
    nickname: string
    gameId: string
    role?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlayerUncheckedCreateWithoutTeamInput = {
    id?: string
    nickname: string
    gameId: string
    role?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlayerCreateOrConnectWithoutTeamInput = {
    where: PlayerWhereUniqueInput
    create: XOR<PlayerCreateWithoutTeamInput, PlayerUncheckedCreateWithoutTeamInput>
  }

  export type PlayerCreateManyTeamInputEnvelope = {
    data: PlayerCreateManyTeamInput | PlayerCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type TournamentCreateWithoutTeamsInput = {
    id?: string
    name: string
    description?: string | null
    prizePool?: string | null
    maxSlots?: number
    status?: $Enums.TournamentStatus
    startDate?: Date | string | null
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    matches?: MatchCreateNestedManyWithoutTournamentInput
  }

  export type TournamentUncheckedCreateWithoutTeamsInput = {
    id?: string
    name: string
    description?: string | null
    prizePool?: string | null
    maxSlots?: number
    status?: $Enums.TournamentStatus
    startDate?: Date | string | null
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    matches?: MatchUncheckedCreateNestedManyWithoutTournamentInput
  }

  export type TournamentCreateOrConnectWithoutTeamsInput = {
    where: TournamentWhereUniqueInput
    create: XOR<TournamentCreateWithoutTeamsInput, TournamentUncheckedCreateWithoutTeamsInput>
  }

  export type MatchCreateWithoutTeamAInput = {
    id?: string
    round: number
    matchNumber: number
    scoreA?: number
    scoreB?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tournament: TournamentCreateNestedOneWithoutMatchesInput
    teamB?: TeamCreateNestedOneWithoutMatchesAsBInput
    winner?: TeamCreateNestedOneWithoutMatchesWonInput
    nextMatch?: MatchCreateNestedOneWithoutPrevMatchesInput
    prevMatches?: MatchCreateNestedManyWithoutNextMatchInput
  }

  export type MatchUncheckedCreateWithoutTeamAInput = {
    id?: string
    tournamentId: string
    round: number
    matchNumber: number
    teamBId?: string | null
    scoreA?: number
    scoreB?: number
    winnerId?: string | null
    nextMatchId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    prevMatches?: MatchUncheckedCreateNestedManyWithoutNextMatchInput
  }

  export type MatchCreateOrConnectWithoutTeamAInput = {
    where: MatchWhereUniqueInput
    create: XOR<MatchCreateWithoutTeamAInput, MatchUncheckedCreateWithoutTeamAInput>
  }

  export type MatchCreateManyTeamAInputEnvelope = {
    data: MatchCreateManyTeamAInput | MatchCreateManyTeamAInput[]
    skipDuplicates?: boolean
  }

  export type MatchCreateWithoutTeamBInput = {
    id?: string
    round: number
    matchNumber: number
    scoreA?: number
    scoreB?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tournament: TournamentCreateNestedOneWithoutMatchesInput
    TeamA?: TeamCreateNestedOneWithoutMatchesAsAInput
    winner?: TeamCreateNestedOneWithoutMatchesWonInput
    nextMatch?: MatchCreateNestedOneWithoutPrevMatchesInput
    prevMatches?: MatchCreateNestedManyWithoutNextMatchInput
  }

  export type MatchUncheckedCreateWithoutTeamBInput = {
    id?: string
    tournamentId: string
    round: number
    matchNumber: number
    teamAId?: string | null
    scoreA?: number
    scoreB?: number
    winnerId?: string | null
    nextMatchId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    prevMatches?: MatchUncheckedCreateNestedManyWithoutNextMatchInput
  }

  export type MatchCreateOrConnectWithoutTeamBInput = {
    where: MatchWhereUniqueInput
    create: XOR<MatchCreateWithoutTeamBInput, MatchUncheckedCreateWithoutTeamBInput>
  }

  export type MatchCreateManyTeamBInputEnvelope = {
    data: MatchCreateManyTeamBInput | MatchCreateManyTeamBInput[]
    skipDuplicates?: boolean
  }

  export type MatchCreateWithoutWinnerInput = {
    id?: string
    round: number
    matchNumber: number
    scoreA?: number
    scoreB?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tournament: TournamentCreateNestedOneWithoutMatchesInput
    TeamA?: TeamCreateNestedOneWithoutMatchesAsAInput
    teamB?: TeamCreateNestedOneWithoutMatchesAsBInput
    nextMatch?: MatchCreateNestedOneWithoutPrevMatchesInput
    prevMatches?: MatchCreateNestedManyWithoutNextMatchInput
  }

  export type MatchUncheckedCreateWithoutWinnerInput = {
    id?: string
    tournamentId: string
    round: number
    matchNumber: number
    teamAId?: string | null
    teamBId?: string | null
    scoreA?: number
    scoreB?: number
    nextMatchId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    prevMatches?: MatchUncheckedCreateNestedManyWithoutNextMatchInput
  }

  export type MatchCreateOrConnectWithoutWinnerInput = {
    where: MatchWhereUniqueInput
    create: XOR<MatchCreateWithoutWinnerInput, MatchUncheckedCreateWithoutWinnerInput>
  }

  export type MatchCreateManyWinnerInputEnvelope = {
    data: MatchCreateManyWinnerInput | MatchCreateManyWinnerInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutTeamInput = {
    update: XOR<UserUpdateWithoutTeamInput, UserUncheckedUpdateWithoutTeamInput>
    create: XOR<UserCreateWithoutTeamInput, UserUncheckedCreateWithoutTeamInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTeamInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTeamInput, UserUncheckedUpdateWithoutTeamInput>
  }

  export type UserUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerUpsertWithWhereUniqueWithoutTeamInput = {
    where: PlayerWhereUniqueInput
    update: XOR<PlayerUpdateWithoutTeamInput, PlayerUncheckedUpdateWithoutTeamInput>
    create: XOR<PlayerCreateWithoutTeamInput, PlayerUncheckedCreateWithoutTeamInput>
  }

  export type PlayerUpdateWithWhereUniqueWithoutTeamInput = {
    where: PlayerWhereUniqueInput
    data: XOR<PlayerUpdateWithoutTeamInput, PlayerUncheckedUpdateWithoutTeamInput>
  }

  export type PlayerUpdateManyWithWhereWithoutTeamInput = {
    where: PlayerScalarWhereInput
    data: XOR<PlayerUpdateManyMutationInput, PlayerUncheckedUpdateManyWithoutTeamInput>
  }

  export type PlayerScalarWhereInput = {
    AND?: PlayerScalarWhereInput | PlayerScalarWhereInput[]
    OR?: PlayerScalarWhereInput[]
    NOT?: PlayerScalarWhereInput | PlayerScalarWhereInput[]
    id?: StringFilter<"Player"> | string
    nickname?: StringFilter<"Player"> | string
    gameId?: StringFilter<"Player"> | string
    role?: StringNullableFilter<"Player"> | string | null
    teamId?: StringFilter<"Player"> | string
    createdAt?: DateTimeFilter<"Player"> | Date | string
    updatedAt?: DateTimeFilter<"Player"> | Date | string
  }

  export type TournamentUpsertWithWhereUniqueWithoutTeamsInput = {
    where: TournamentWhereUniqueInput
    update: XOR<TournamentUpdateWithoutTeamsInput, TournamentUncheckedUpdateWithoutTeamsInput>
    create: XOR<TournamentCreateWithoutTeamsInput, TournamentUncheckedCreateWithoutTeamsInput>
  }

  export type TournamentUpdateWithWhereUniqueWithoutTeamsInput = {
    where: TournamentWhereUniqueInput
    data: XOR<TournamentUpdateWithoutTeamsInput, TournamentUncheckedUpdateWithoutTeamsInput>
  }

  export type TournamentUpdateManyWithWhereWithoutTeamsInput = {
    where: TournamentScalarWhereInput
    data: XOR<TournamentUpdateManyMutationInput, TournamentUncheckedUpdateManyWithoutTeamsInput>
  }

  export type TournamentScalarWhereInput = {
    AND?: TournamentScalarWhereInput | TournamentScalarWhereInput[]
    OR?: TournamentScalarWhereInput[]
    NOT?: TournamentScalarWhereInput | TournamentScalarWhereInput[]
    id?: StringFilter<"Tournament"> | string
    name?: StringFilter<"Tournament"> | string
    description?: StringNullableFilter<"Tournament"> | string | null
    prizePool?: StringNullableFilter<"Tournament"> | string | null
    maxSlots?: IntFilter<"Tournament"> | number
    status?: EnumTournamentStatusFilter<"Tournament"> | $Enums.TournamentStatus
    startDate?: DateTimeNullableFilter<"Tournament"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Tournament"> | Date | string | null
    createdAt?: DateTimeFilter<"Tournament"> | Date | string
    updatedAt?: DateTimeFilter<"Tournament"> | Date | string
  }

  export type MatchUpsertWithWhereUniqueWithoutTeamAInput = {
    where: MatchWhereUniqueInput
    update: XOR<MatchUpdateWithoutTeamAInput, MatchUncheckedUpdateWithoutTeamAInput>
    create: XOR<MatchCreateWithoutTeamAInput, MatchUncheckedCreateWithoutTeamAInput>
  }

  export type MatchUpdateWithWhereUniqueWithoutTeamAInput = {
    where: MatchWhereUniqueInput
    data: XOR<MatchUpdateWithoutTeamAInput, MatchUncheckedUpdateWithoutTeamAInput>
  }

  export type MatchUpdateManyWithWhereWithoutTeamAInput = {
    where: MatchScalarWhereInput
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyWithoutTeamAInput>
  }

  export type MatchScalarWhereInput = {
    AND?: MatchScalarWhereInput | MatchScalarWhereInput[]
    OR?: MatchScalarWhereInput[]
    NOT?: MatchScalarWhereInput | MatchScalarWhereInput[]
    id?: StringFilter<"Match"> | string
    tournamentId?: StringFilter<"Match"> | string
    round?: IntFilter<"Match"> | number
    matchNumber?: IntFilter<"Match"> | number
    teamAId?: StringNullableFilter<"Match"> | string | null
    teamBId?: StringNullableFilter<"Match"> | string | null
    scoreA?: IntFilter<"Match"> | number
    scoreB?: IntFilter<"Match"> | number
    winnerId?: StringNullableFilter<"Match"> | string | null
    nextMatchId?: StringNullableFilter<"Match"> | string | null
    createdAt?: DateTimeFilter<"Match"> | Date | string
    updatedAt?: DateTimeFilter<"Match"> | Date | string
  }

  export type MatchUpsertWithWhereUniqueWithoutTeamBInput = {
    where: MatchWhereUniqueInput
    update: XOR<MatchUpdateWithoutTeamBInput, MatchUncheckedUpdateWithoutTeamBInput>
    create: XOR<MatchCreateWithoutTeamBInput, MatchUncheckedCreateWithoutTeamBInput>
  }

  export type MatchUpdateWithWhereUniqueWithoutTeamBInput = {
    where: MatchWhereUniqueInput
    data: XOR<MatchUpdateWithoutTeamBInput, MatchUncheckedUpdateWithoutTeamBInput>
  }

  export type MatchUpdateManyWithWhereWithoutTeamBInput = {
    where: MatchScalarWhereInput
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyWithoutTeamBInput>
  }

  export type MatchUpsertWithWhereUniqueWithoutWinnerInput = {
    where: MatchWhereUniqueInput
    update: XOR<MatchUpdateWithoutWinnerInput, MatchUncheckedUpdateWithoutWinnerInput>
    create: XOR<MatchCreateWithoutWinnerInput, MatchUncheckedCreateWithoutWinnerInput>
  }

  export type MatchUpdateWithWhereUniqueWithoutWinnerInput = {
    where: MatchWhereUniqueInput
    data: XOR<MatchUpdateWithoutWinnerInput, MatchUncheckedUpdateWithoutWinnerInput>
  }

  export type MatchUpdateManyWithWhereWithoutWinnerInput = {
    where: MatchScalarWhereInput
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyWithoutWinnerInput>
  }

  export type TeamCreateWithoutPlayersInput = {
    id?: string
    name: string
    logo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    captain: UserCreateNestedOneWithoutTeamInput
    tournaments?: TournamentCreateNestedManyWithoutTeamsInput
    matchesAsA?: MatchCreateNestedManyWithoutTeamAInput
    matchesAsB?: MatchCreateNestedManyWithoutTeamBInput
    matchesWon?: MatchCreateNestedManyWithoutWinnerInput
  }

  export type TeamUncheckedCreateWithoutPlayersInput = {
    id?: string
    name: string
    logo?: string | null
    captainId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tournaments?: TournamentUncheckedCreateNestedManyWithoutTeamsInput
    matchesAsA?: MatchUncheckedCreateNestedManyWithoutTeamAInput
    matchesAsB?: MatchUncheckedCreateNestedManyWithoutTeamBInput
    matchesWon?: MatchUncheckedCreateNestedManyWithoutWinnerInput
  }

  export type TeamCreateOrConnectWithoutPlayersInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutPlayersInput, TeamUncheckedCreateWithoutPlayersInput>
  }

  export type TeamUpsertWithoutPlayersInput = {
    update: XOR<TeamUpdateWithoutPlayersInput, TeamUncheckedUpdateWithoutPlayersInput>
    create: XOR<TeamCreateWithoutPlayersInput, TeamUncheckedCreateWithoutPlayersInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutPlayersInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutPlayersInput, TeamUncheckedUpdateWithoutPlayersInput>
  }

  export type TeamUpdateWithoutPlayersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    captain?: UserUpdateOneRequiredWithoutTeamNestedInput
    tournaments?: TournamentUpdateManyWithoutTeamsNestedInput
    matchesAsA?: MatchUpdateManyWithoutTeamANestedInput
    matchesAsB?: MatchUpdateManyWithoutTeamBNestedInput
    matchesWon?: MatchUpdateManyWithoutWinnerNestedInput
  }

  export type TeamUncheckedUpdateWithoutPlayersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    captainId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tournaments?: TournamentUncheckedUpdateManyWithoutTeamsNestedInput
    matchesAsA?: MatchUncheckedUpdateManyWithoutTeamANestedInput
    matchesAsB?: MatchUncheckedUpdateManyWithoutTeamBNestedInput
    matchesWon?: MatchUncheckedUpdateManyWithoutWinnerNestedInput
  }

  export type TeamCreateWithoutTournamentsInput = {
    id?: string
    name: string
    logo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    captain: UserCreateNestedOneWithoutTeamInput
    players?: PlayerCreateNestedManyWithoutTeamInput
    matchesAsA?: MatchCreateNestedManyWithoutTeamAInput
    matchesAsB?: MatchCreateNestedManyWithoutTeamBInput
    matchesWon?: MatchCreateNestedManyWithoutWinnerInput
  }

  export type TeamUncheckedCreateWithoutTournamentsInput = {
    id?: string
    name: string
    logo?: string | null
    captainId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    players?: PlayerUncheckedCreateNestedManyWithoutTeamInput
    matchesAsA?: MatchUncheckedCreateNestedManyWithoutTeamAInput
    matchesAsB?: MatchUncheckedCreateNestedManyWithoutTeamBInput
    matchesWon?: MatchUncheckedCreateNestedManyWithoutWinnerInput
  }

  export type TeamCreateOrConnectWithoutTournamentsInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutTournamentsInput, TeamUncheckedCreateWithoutTournamentsInput>
  }

  export type MatchCreateWithoutTournamentInput = {
    id?: string
    round: number
    matchNumber: number
    scoreA?: number
    scoreB?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    TeamA?: TeamCreateNestedOneWithoutMatchesAsAInput
    teamB?: TeamCreateNestedOneWithoutMatchesAsBInput
    winner?: TeamCreateNestedOneWithoutMatchesWonInput
    nextMatch?: MatchCreateNestedOneWithoutPrevMatchesInput
    prevMatches?: MatchCreateNestedManyWithoutNextMatchInput
  }

  export type MatchUncheckedCreateWithoutTournamentInput = {
    id?: string
    round: number
    matchNumber: number
    teamAId?: string | null
    teamBId?: string | null
    scoreA?: number
    scoreB?: number
    winnerId?: string | null
    nextMatchId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    prevMatches?: MatchUncheckedCreateNestedManyWithoutNextMatchInput
  }

  export type MatchCreateOrConnectWithoutTournamentInput = {
    where: MatchWhereUniqueInput
    create: XOR<MatchCreateWithoutTournamentInput, MatchUncheckedCreateWithoutTournamentInput>
  }

  export type MatchCreateManyTournamentInputEnvelope = {
    data: MatchCreateManyTournamentInput | MatchCreateManyTournamentInput[]
    skipDuplicates?: boolean
  }

  export type TeamUpsertWithWhereUniqueWithoutTournamentsInput = {
    where: TeamWhereUniqueInput
    update: XOR<TeamUpdateWithoutTournamentsInput, TeamUncheckedUpdateWithoutTournamentsInput>
    create: XOR<TeamCreateWithoutTournamentsInput, TeamUncheckedCreateWithoutTournamentsInput>
  }

  export type TeamUpdateWithWhereUniqueWithoutTournamentsInput = {
    where: TeamWhereUniqueInput
    data: XOR<TeamUpdateWithoutTournamentsInput, TeamUncheckedUpdateWithoutTournamentsInput>
  }

  export type TeamUpdateManyWithWhereWithoutTournamentsInput = {
    where: TeamScalarWhereInput
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyWithoutTournamentsInput>
  }

  export type TeamScalarWhereInput = {
    AND?: TeamScalarWhereInput | TeamScalarWhereInput[]
    OR?: TeamScalarWhereInput[]
    NOT?: TeamScalarWhereInput | TeamScalarWhereInput[]
    id?: StringFilter<"Team"> | string
    name?: StringFilter<"Team"> | string
    logo?: StringNullableFilter<"Team"> | string | null
    captainId?: StringFilter<"Team"> | string
    createdAt?: DateTimeFilter<"Team"> | Date | string
    updatedAt?: DateTimeFilter<"Team"> | Date | string
  }

  export type MatchUpsertWithWhereUniqueWithoutTournamentInput = {
    where: MatchWhereUniqueInput
    update: XOR<MatchUpdateWithoutTournamentInput, MatchUncheckedUpdateWithoutTournamentInput>
    create: XOR<MatchCreateWithoutTournamentInput, MatchUncheckedCreateWithoutTournamentInput>
  }

  export type MatchUpdateWithWhereUniqueWithoutTournamentInput = {
    where: MatchWhereUniqueInput
    data: XOR<MatchUpdateWithoutTournamentInput, MatchUncheckedUpdateWithoutTournamentInput>
  }

  export type MatchUpdateManyWithWhereWithoutTournamentInput = {
    where: MatchScalarWhereInput
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyWithoutTournamentInput>
  }

  export type TournamentCreateWithoutMatchesInput = {
    id?: string
    name: string
    description?: string | null
    prizePool?: string | null
    maxSlots?: number
    status?: $Enums.TournamentStatus
    startDate?: Date | string | null
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    teams?: TeamCreateNestedManyWithoutTournamentsInput
  }

  export type TournamentUncheckedCreateWithoutMatchesInput = {
    id?: string
    name: string
    description?: string | null
    prizePool?: string | null
    maxSlots?: number
    status?: $Enums.TournamentStatus
    startDate?: Date | string | null
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    teams?: TeamUncheckedCreateNestedManyWithoutTournamentsInput
  }

  export type TournamentCreateOrConnectWithoutMatchesInput = {
    where: TournamentWhereUniqueInput
    create: XOR<TournamentCreateWithoutMatchesInput, TournamentUncheckedCreateWithoutMatchesInput>
  }

  export type TeamCreateWithoutMatchesAsAInput = {
    id?: string
    name: string
    logo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    captain: UserCreateNestedOneWithoutTeamInput
    players?: PlayerCreateNestedManyWithoutTeamInput
    tournaments?: TournamentCreateNestedManyWithoutTeamsInput
    matchesAsB?: MatchCreateNestedManyWithoutTeamBInput
    matchesWon?: MatchCreateNestedManyWithoutWinnerInput
  }

  export type TeamUncheckedCreateWithoutMatchesAsAInput = {
    id?: string
    name: string
    logo?: string | null
    captainId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    players?: PlayerUncheckedCreateNestedManyWithoutTeamInput
    tournaments?: TournamentUncheckedCreateNestedManyWithoutTeamsInput
    matchesAsB?: MatchUncheckedCreateNestedManyWithoutTeamBInput
    matchesWon?: MatchUncheckedCreateNestedManyWithoutWinnerInput
  }

  export type TeamCreateOrConnectWithoutMatchesAsAInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutMatchesAsAInput, TeamUncheckedCreateWithoutMatchesAsAInput>
  }

  export type TeamCreateWithoutMatchesAsBInput = {
    id?: string
    name: string
    logo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    captain: UserCreateNestedOneWithoutTeamInput
    players?: PlayerCreateNestedManyWithoutTeamInput
    tournaments?: TournamentCreateNestedManyWithoutTeamsInput
    matchesAsA?: MatchCreateNestedManyWithoutTeamAInput
    matchesWon?: MatchCreateNestedManyWithoutWinnerInput
  }

  export type TeamUncheckedCreateWithoutMatchesAsBInput = {
    id?: string
    name: string
    logo?: string | null
    captainId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    players?: PlayerUncheckedCreateNestedManyWithoutTeamInput
    tournaments?: TournamentUncheckedCreateNestedManyWithoutTeamsInput
    matchesAsA?: MatchUncheckedCreateNestedManyWithoutTeamAInput
    matchesWon?: MatchUncheckedCreateNestedManyWithoutWinnerInput
  }

  export type TeamCreateOrConnectWithoutMatchesAsBInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutMatchesAsBInput, TeamUncheckedCreateWithoutMatchesAsBInput>
  }

  export type TeamCreateWithoutMatchesWonInput = {
    id?: string
    name: string
    logo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    captain: UserCreateNestedOneWithoutTeamInput
    players?: PlayerCreateNestedManyWithoutTeamInput
    tournaments?: TournamentCreateNestedManyWithoutTeamsInput
    matchesAsA?: MatchCreateNestedManyWithoutTeamAInput
    matchesAsB?: MatchCreateNestedManyWithoutTeamBInput
  }

  export type TeamUncheckedCreateWithoutMatchesWonInput = {
    id?: string
    name: string
    logo?: string | null
    captainId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    players?: PlayerUncheckedCreateNestedManyWithoutTeamInput
    tournaments?: TournamentUncheckedCreateNestedManyWithoutTeamsInput
    matchesAsA?: MatchUncheckedCreateNestedManyWithoutTeamAInput
    matchesAsB?: MatchUncheckedCreateNestedManyWithoutTeamBInput
  }

  export type TeamCreateOrConnectWithoutMatchesWonInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutMatchesWonInput, TeamUncheckedCreateWithoutMatchesWonInput>
  }

  export type MatchCreateWithoutPrevMatchesInput = {
    id?: string
    round: number
    matchNumber: number
    scoreA?: number
    scoreB?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tournament: TournamentCreateNestedOneWithoutMatchesInput
    TeamA?: TeamCreateNestedOneWithoutMatchesAsAInput
    teamB?: TeamCreateNestedOneWithoutMatchesAsBInput
    winner?: TeamCreateNestedOneWithoutMatchesWonInput
    nextMatch?: MatchCreateNestedOneWithoutPrevMatchesInput
  }

  export type MatchUncheckedCreateWithoutPrevMatchesInput = {
    id?: string
    tournamentId: string
    round: number
    matchNumber: number
    teamAId?: string | null
    teamBId?: string | null
    scoreA?: number
    scoreB?: number
    winnerId?: string | null
    nextMatchId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchCreateOrConnectWithoutPrevMatchesInput = {
    where: MatchWhereUniqueInput
    create: XOR<MatchCreateWithoutPrevMatchesInput, MatchUncheckedCreateWithoutPrevMatchesInput>
  }

  export type MatchCreateWithoutNextMatchInput = {
    id?: string
    round: number
    matchNumber: number
    scoreA?: number
    scoreB?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tournament: TournamentCreateNestedOneWithoutMatchesInput
    TeamA?: TeamCreateNestedOneWithoutMatchesAsAInput
    teamB?: TeamCreateNestedOneWithoutMatchesAsBInput
    winner?: TeamCreateNestedOneWithoutMatchesWonInput
    prevMatches?: MatchCreateNestedManyWithoutNextMatchInput
  }

  export type MatchUncheckedCreateWithoutNextMatchInput = {
    id?: string
    tournamentId: string
    round: number
    matchNumber: number
    teamAId?: string | null
    teamBId?: string | null
    scoreA?: number
    scoreB?: number
    winnerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    prevMatches?: MatchUncheckedCreateNestedManyWithoutNextMatchInput
  }

  export type MatchCreateOrConnectWithoutNextMatchInput = {
    where: MatchWhereUniqueInput
    create: XOR<MatchCreateWithoutNextMatchInput, MatchUncheckedCreateWithoutNextMatchInput>
  }

  export type MatchCreateManyNextMatchInputEnvelope = {
    data: MatchCreateManyNextMatchInput | MatchCreateManyNextMatchInput[]
    skipDuplicates?: boolean
  }

  export type TournamentUpsertWithoutMatchesInput = {
    update: XOR<TournamentUpdateWithoutMatchesInput, TournamentUncheckedUpdateWithoutMatchesInput>
    create: XOR<TournamentCreateWithoutMatchesInput, TournamentUncheckedCreateWithoutMatchesInput>
    where?: TournamentWhereInput
  }

  export type TournamentUpdateToOneWithWhereWithoutMatchesInput = {
    where?: TournamentWhereInput
    data: XOR<TournamentUpdateWithoutMatchesInput, TournamentUncheckedUpdateWithoutMatchesInput>
  }

  export type TournamentUpdateWithoutMatchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    prizePool?: NullableStringFieldUpdateOperationsInput | string | null
    maxSlots?: IntFieldUpdateOperationsInput | number
    status?: EnumTournamentStatusFieldUpdateOperationsInput | $Enums.TournamentStatus
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teams?: TeamUpdateManyWithoutTournamentsNestedInput
  }

  export type TournamentUncheckedUpdateWithoutMatchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    prizePool?: NullableStringFieldUpdateOperationsInput | string | null
    maxSlots?: IntFieldUpdateOperationsInput | number
    status?: EnumTournamentStatusFieldUpdateOperationsInput | $Enums.TournamentStatus
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teams?: TeamUncheckedUpdateManyWithoutTournamentsNestedInput
  }

  export type TeamUpsertWithoutMatchesAsAInput = {
    update: XOR<TeamUpdateWithoutMatchesAsAInput, TeamUncheckedUpdateWithoutMatchesAsAInput>
    create: XOR<TeamCreateWithoutMatchesAsAInput, TeamUncheckedCreateWithoutMatchesAsAInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutMatchesAsAInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutMatchesAsAInput, TeamUncheckedUpdateWithoutMatchesAsAInput>
  }

  export type TeamUpdateWithoutMatchesAsAInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    captain?: UserUpdateOneRequiredWithoutTeamNestedInput
    players?: PlayerUpdateManyWithoutTeamNestedInput
    tournaments?: TournamentUpdateManyWithoutTeamsNestedInput
    matchesAsB?: MatchUpdateManyWithoutTeamBNestedInput
    matchesWon?: MatchUpdateManyWithoutWinnerNestedInput
  }

  export type TeamUncheckedUpdateWithoutMatchesAsAInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    captainId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    players?: PlayerUncheckedUpdateManyWithoutTeamNestedInput
    tournaments?: TournamentUncheckedUpdateManyWithoutTeamsNestedInput
    matchesAsB?: MatchUncheckedUpdateManyWithoutTeamBNestedInput
    matchesWon?: MatchUncheckedUpdateManyWithoutWinnerNestedInput
  }

  export type TeamUpsertWithoutMatchesAsBInput = {
    update: XOR<TeamUpdateWithoutMatchesAsBInput, TeamUncheckedUpdateWithoutMatchesAsBInput>
    create: XOR<TeamCreateWithoutMatchesAsBInput, TeamUncheckedCreateWithoutMatchesAsBInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutMatchesAsBInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutMatchesAsBInput, TeamUncheckedUpdateWithoutMatchesAsBInput>
  }

  export type TeamUpdateWithoutMatchesAsBInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    captain?: UserUpdateOneRequiredWithoutTeamNestedInput
    players?: PlayerUpdateManyWithoutTeamNestedInput
    tournaments?: TournamentUpdateManyWithoutTeamsNestedInput
    matchesAsA?: MatchUpdateManyWithoutTeamANestedInput
    matchesWon?: MatchUpdateManyWithoutWinnerNestedInput
  }

  export type TeamUncheckedUpdateWithoutMatchesAsBInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    captainId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    players?: PlayerUncheckedUpdateManyWithoutTeamNestedInput
    tournaments?: TournamentUncheckedUpdateManyWithoutTeamsNestedInput
    matchesAsA?: MatchUncheckedUpdateManyWithoutTeamANestedInput
    matchesWon?: MatchUncheckedUpdateManyWithoutWinnerNestedInput
  }

  export type TeamUpsertWithoutMatchesWonInput = {
    update: XOR<TeamUpdateWithoutMatchesWonInput, TeamUncheckedUpdateWithoutMatchesWonInput>
    create: XOR<TeamCreateWithoutMatchesWonInput, TeamUncheckedCreateWithoutMatchesWonInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutMatchesWonInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutMatchesWonInput, TeamUncheckedUpdateWithoutMatchesWonInput>
  }

  export type TeamUpdateWithoutMatchesWonInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    captain?: UserUpdateOneRequiredWithoutTeamNestedInput
    players?: PlayerUpdateManyWithoutTeamNestedInput
    tournaments?: TournamentUpdateManyWithoutTeamsNestedInput
    matchesAsA?: MatchUpdateManyWithoutTeamANestedInput
    matchesAsB?: MatchUpdateManyWithoutTeamBNestedInput
  }

  export type TeamUncheckedUpdateWithoutMatchesWonInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    captainId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    players?: PlayerUncheckedUpdateManyWithoutTeamNestedInput
    tournaments?: TournamentUncheckedUpdateManyWithoutTeamsNestedInput
    matchesAsA?: MatchUncheckedUpdateManyWithoutTeamANestedInput
    matchesAsB?: MatchUncheckedUpdateManyWithoutTeamBNestedInput
  }

  export type MatchUpsertWithoutPrevMatchesInput = {
    update: XOR<MatchUpdateWithoutPrevMatchesInput, MatchUncheckedUpdateWithoutPrevMatchesInput>
    create: XOR<MatchCreateWithoutPrevMatchesInput, MatchUncheckedCreateWithoutPrevMatchesInput>
    where?: MatchWhereInput
  }

  export type MatchUpdateToOneWithWhereWithoutPrevMatchesInput = {
    where?: MatchWhereInput
    data: XOR<MatchUpdateWithoutPrevMatchesInput, MatchUncheckedUpdateWithoutPrevMatchesInput>
  }

  export type MatchUpdateWithoutPrevMatchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    round?: IntFieldUpdateOperationsInput | number
    matchNumber?: IntFieldUpdateOperationsInput | number
    scoreA?: IntFieldUpdateOperationsInput | number
    scoreB?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tournament?: TournamentUpdateOneRequiredWithoutMatchesNestedInput
    TeamA?: TeamUpdateOneWithoutMatchesAsANestedInput
    teamB?: TeamUpdateOneWithoutMatchesAsBNestedInput
    winner?: TeamUpdateOneWithoutMatchesWonNestedInput
    nextMatch?: MatchUpdateOneWithoutPrevMatchesNestedInput
  }

  export type MatchUncheckedUpdateWithoutPrevMatchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    tournamentId?: StringFieldUpdateOperationsInput | string
    round?: IntFieldUpdateOperationsInput | number
    matchNumber?: IntFieldUpdateOperationsInput | number
    teamAId?: NullableStringFieldUpdateOperationsInput | string | null
    teamBId?: NullableStringFieldUpdateOperationsInput | string | null
    scoreA?: IntFieldUpdateOperationsInput | number
    scoreB?: IntFieldUpdateOperationsInput | number
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    nextMatchId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchUpsertWithWhereUniqueWithoutNextMatchInput = {
    where: MatchWhereUniqueInput
    update: XOR<MatchUpdateWithoutNextMatchInput, MatchUncheckedUpdateWithoutNextMatchInput>
    create: XOR<MatchCreateWithoutNextMatchInput, MatchUncheckedCreateWithoutNextMatchInput>
  }

  export type MatchUpdateWithWhereUniqueWithoutNextMatchInput = {
    where: MatchWhereUniqueInput
    data: XOR<MatchUpdateWithoutNextMatchInput, MatchUncheckedUpdateWithoutNextMatchInput>
  }

  export type MatchUpdateManyWithWhereWithoutNextMatchInput = {
    where: MatchScalarWhereInput
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyWithoutNextMatchInput>
  }

  export type PlayerCreateManyTeamInput = {
    id?: string
    nickname: string
    gameId: string
    role?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchCreateManyTeamAInput = {
    id?: string
    tournamentId: string
    round: number
    matchNumber: number
    teamBId?: string | null
    scoreA?: number
    scoreB?: number
    winnerId?: string | null
    nextMatchId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchCreateManyTeamBInput = {
    id?: string
    tournamentId: string
    round: number
    matchNumber: number
    teamAId?: string | null
    scoreA?: number
    scoreB?: number
    winnerId?: string | null
    nextMatchId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchCreateManyWinnerInput = {
    id?: string
    tournamentId: string
    round: number
    matchNumber: number
    teamAId?: string | null
    teamBId?: string | null
    scoreA?: number
    scoreB?: number
    nextMatchId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlayerUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerUncheckedUpdateManyWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TournamentUpdateWithoutTeamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    prizePool?: NullableStringFieldUpdateOperationsInput | string | null
    maxSlots?: IntFieldUpdateOperationsInput | number
    status?: EnumTournamentStatusFieldUpdateOperationsInput | $Enums.TournamentStatus
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matches?: MatchUpdateManyWithoutTournamentNestedInput
  }

  export type TournamentUncheckedUpdateWithoutTeamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    prizePool?: NullableStringFieldUpdateOperationsInput | string | null
    maxSlots?: IntFieldUpdateOperationsInput | number
    status?: EnumTournamentStatusFieldUpdateOperationsInput | $Enums.TournamentStatus
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matches?: MatchUncheckedUpdateManyWithoutTournamentNestedInput
  }

  export type TournamentUncheckedUpdateManyWithoutTeamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    prizePool?: NullableStringFieldUpdateOperationsInput | string | null
    maxSlots?: IntFieldUpdateOperationsInput | number
    status?: EnumTournamentStatusFieldUpdateOperationsInput | $Enums.TournamentStatus
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchUpdateWithoutTeamAInput = {
    id?: StringFieldUpdateOperationsInput | string
    round?: IntFieldUpdateOperationsInput | number
    matchNumber?: IntFieldUpdateOperationsInput | number
    scoreA?: IntFieldUpdateOperationsInput | number
    scoreB?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tournament?: TournamentUpdateOneRequiredWithoutMatchesNestedInput
    teamB?: TeamUpdateOneWithoutMatchesAsBNestedInput
    winner?: TeamUpdateOneWithoutMatchesWonNestedInput
    nextMatch?: MatchUpdateOneWithoutPrevMatchesNestedInput
    prevMatches?: MatchUpdateManyWithoutNextMatchNestedInput
  }

  export type MatchUncheckedUpdateWithoutTeamAInput = {
    id?: StringFieldUpdateOperationsInput | string
    tournamentId?: StringFieldUpdateOperationsInput | string
    round?: IntFieldUpdateOperationsInput | number
    matchNumber?: IntFieldUpdateOperationsInput | number
    teamBId?: NullableStringFieldUpdateOperationsInput | string | null
    scoreA?: IntFieldUpdateOperationsInput | number
    scoreB?: IntFieldUpdateOperationsInput | number
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    nextMatchId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prevMatches?: MatchUncheckedUpdateManyWithoutNextMatchNestedInput
  }

  export type MatchUncheckedUpdateManyWithoutTeamAInput = {
    id?: StringFieldUpdateOperationsInput | string
    tournamentId?: StringFieldUpdateOperationsInput | string
    round?: IntFieldUpdateOperationsInput | number
    matchNumber?: IntFieldUpdateOperationsInput | number
    teamBId?: NullableStringFieldUpdateOperationsInput | string | null
    scoreA?: IntFieldUpdateOperationsInput | number
    scoreB?: IntFieldUpdateOperationsInput | number
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    nextMatchId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchUpdateWithoutTeamBInput = {
    id?: StringFieldUpdateOperationsInput | string
    round?: IntFieldUpdateOperationsInput | number
    matchNumber?: IntFieldUpdateOperationsInput | number
    scoreA?: IntFieldUpdateOperationsInput | number
    scoreB?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tournament?: TournamentUpdateOneRequiredWithoutMatchesNestedInput
    TeamA?: TeamUpdateOneWithoutMatchesAsANestedInput
    winner?: TeamUpdateOneWithoutMatchesWonNestedInput
    nextMatch?: MatchUpdateOneWithoutPrevMatchesNestedInput
    prevMatches?: MatchUpdateManyWithoutNextMatchNestedInput
  }

  export type MatchUncheckedUpdateWithoutTeamBInput = {
    id?: StringFieldUpdateOperationsInput | string
    tournamentId?: StringFieldUpdateOperationsInput | string
    round?: IntFieldUpdateOperationsInput | number
    matchNumber?: IntFieldUpdateOperationsInput | number
    teamAId?: NullableStringFieldUpdateOperationsInput | string | null
    scoreA?: IntFieldUpdateOperationsInput | number
    scoreB?: IntFieldUpdateOperationsInput | number
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    nextMatchId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prevMatches?: MatchUncheckedUpdateManyWithoutNextMatchNestedInput
  }

  export type MatchUncheckedUpdateManyWithoutTeamBInput = {
    id?: StringFieldUpdateOperationsInput | string
    tournamentId?: StringFieldUpdateOperationsInput | string
    round?: IntFieldUpdateOperationsInput | number
    matchNumber?: IntFieldUpdateOperationsInput | number
    teamAId?: NullableStringFieldUpdateOperationsInput | string | null
    scoreA?: IntFieldUpdateOperationsInput | number
    scoreB?: IntFieldUpdateOperationsInput | number
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    nextMatchId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchUpdateWithoutWinnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    round?: IntFieldUpdateOperationsInput | number
    matchNumber?: IntFieldUpdateOperationsInput | number
    scoreA?: IntFieldUpdateOperationsInput | number
    scoreB?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tournament?: TournamentUpdateOneRequiredWithoutMatchesNestedInput
    TeamA?: TeamUpdateOneWithoutMatchesAsANestedInput
    teamB?: TeamUpdateOneWithoutMatchesAsBNestedInput
    nextMatch?: MatchUpdateOneWithoutPrevMatchesNestedInput
    prevMatches?: MatchUpdateManyWithoutNextMatchNestedInput
  }

  export type MatchUncheckedUpdateWithoutWinnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    tournamentId?: StringFieldUpdateOperationsInput | string
    round?: IntFieldUpdateOperationsInput | number
    matchNumber?: IntFieldUpdateOperationsInput | number
    teamAId?: NullableStringFieldUpdateOperationsInput | string | null
    teamBId?: NullableStringFieldUpdateOperationsInput | string | null
    scoreA?: IntFieldUpdateOperationsInput | number
    scoreB?: IntFieldUpdateOperationsInput | number
    nextMatchId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prevMatches?: MatchUncheckedUpdateManyWithoutNextMatchNestedInput
  }

  export type MatchUncheckedUpdateManyWithoutWinnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    tournamentId?: StringFieldUpdateOperationsInput | string
    round?: IntFieldUpdateOperationsInput | number
    matchNumber?: IntFieldUpdateOperationsInput | number
    teamAId?: NullableStringFieldUpdateOperationsInput | string | null
    teamBId?: NullableStringFieldUpdateOperationsInput | string | null
    scoreA?: IntFieldUpdateOperationsInput | number
    scoreB?: IntFieldUpdateOperationsInput | number
    nextMatchId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchCreateManyTournamentInput = {
    id?: string
    round: number
    matchNumber: number
    teamAId?: string | null
    teamBId?: string | null
    scoreA?: number
    scoreB?: number
    winnerId?: string | null
    nextMatchId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeamUpdateWithoutTournamentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    captain?: UserUpdateOneRequiredWithoutTeamNestedInput
    players?: PlayerUpdateManyWithoutTeamNestedInput
    matchesAsA?: MatchUpdateManyWithoutTeamANestedInput
    matchesAsB?: MatchUpdateManyWithoutTeamBNestedInput
    matchesWon?: MatchUpdateManyWithoutWinnerNestedInput
  }

  export type TeamUncheckedUpdateWithoutTournamentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    captainId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    players?: PlayerUncheckedUpdateManyWithoutTeamNestedInput
    matchesAsA?: MatchUncheckedUpdateManyWithoutTeamANestedInput
    matchesAsB?: MatchUncheckedUpdateManyWithoutTeamBNestedInput
    matchesWon?: MatchUncheckedUpdateManyWithoutWinnerNestedInput
  }

  export type TeamUncheckedUpdateManyWithoutTournamentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    captainId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchUpdateWithoutTournamentInput = {
    id?: StringFieldUpdateOperationsInput | string
    round?: IntFieldUpdateOperationsInput | number
    matchNumber?: IntFieldUpdateOperationsInput | number
    scoreA?: IntFieldUpdateOperationsInput | number
    scoreB?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    TeamA?: TeamUpdateOneWithoutMatchesAsANestedInput
    teamB?: TeamUpdateOneWithoutMatchesAsBNestedInput
    winner?: TeamUpdateOneWithoutMatchesWonNestedInput
    nextMatch?: MatchUpdateOneWithoutPrevMatchesNestedInput
    prevMatches?: MatchUpdateManyWithoutNextMatchNestedInput
  }

  export type MatchUncheckedUpdateWithoutTournamentInput = {
    id?: StringFieldUpdateOperationsInput | string
    round?: IntFieldUpdateOperationsInput | number
    matchNumber?: IntFieldUpdateOperationsInput | number
    teamAId?: NullableStringFieldUpdateOperationsInput | string | null
    teamBId?: NullableStringFieldUpdateOperationsInput | string | null
    scoreA?: IntFieldUpdateOperationsInput | number
    scoreB?: IntFieldUpdateOperationsInput | number
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    nextMatchId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prevMatches?: MatchUncheckedUpdateManyWithoutNextMatchNestedInput
  }

  export type MatchUncheckedUpdateManyWithoutTournamentInput = {
    id?: StringFieldUpdateOperationsInput | string
    round?: IntFieldUpdateOperationsInput | number
    matchNumber?: IntFieldUpdateOperationsInput | number
    teamAId?: NullableStringFieldUpdateOperationsInput | string | null
    teamBId?: NullableStringFieldUpdateOperationsInput | string | null
    scoreA?: IntFieldUpdateOperationsInput | number
    scoreB?: IntFieldUpdateOperationsInput | number
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    nextMatchId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchCreateManyNextMatchInput = {
    id?: string
    tournamentId: string
    round: number
    matchNumber: number
    teamAId?: string | null
    teamBId?: string | null
    scoreA?: number
    scoreB?: number
    winnerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchUpdateWithoutNextMatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    round?: IntFieldUpdateOperationsInput | number
    matchNumber?: IntFieldUpdateOperationsInput | number
    scoreA?: IntFieldUpdateOperationsInput | number
    scoreB?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tournament?: TournamentUpdateOneRequiredWithoutMatchesNestedInput
    TeamA?: TeamUpdateOneWithoutMatchesAsANestedInput
    teamB?: TeamUpdateOneWithoutMatchesAsBNestedInput
    winner?: TeamUpdateOneWithoutMatchesWonNestedInput
    prevMatches?: MatchUpdateManyWithoutNextMatchNestedInput
  }

  export type MatchUncheckedUpdateWithoutNextMatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    tournamentId?: StringFieldUpdateOperationsInput | string
    round?: IntFieldUpdateOperationsInput | number
    matchNumber?: IntFieldUpdateOperationsInput | number
    teamAId?: NullableStringFieldUpdateOperationsInput | string | null
    teamBId?: NullableStringFieldUpdateOperationsInput | string | null
    scoreA?: IntFieldUpdateOperationsInput | number
    scoreB?: IntFieldUpdateOperationsInput | number
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prevMatches?: MatchUncheckedUpdateManyWithoutNextMatchNestedInput
  }

  export type MatchUncheckedUpdateManyWithoutNextMatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    tournamentId?: StringFieldUpdateOperationsInput | string
    round?: IntFieldUpdateOperationsInput | number
    matchNumber?: IntFieldUpdateOperationsInput | number
    teamAId?: NullableStringFieldUpdateOperationsInput | string | null
    teamBId?: NullableStringFieldUpdateOperationsInput | string | null
    scoreA?: IntFieldUpdateOperationsInput | number
    scoreB?: IntFieldUpdateOperationsInput | number
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}