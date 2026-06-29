
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
 * Model Company
 * 
 */
export type Company = $Result.DefaultSelection<Prisma.$CompanyPayload>
/**
 * Model Investor
 * 
 */
export type Investor = $Result.DefaultSelection<Prisma.$InvestorPayload>
/**
 * Model Founder
 * 
 */
export type Founder = $Result.DefaultSelection<Prisma.$FounderPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model FundingRound
 * 
 */
export type FundingRound = $Result.DefaultSelection<Prisma.$FundingRoundPayload>
/**
 * Model NewsArticle
 * 
 */
export type NewsArticle = $Result.DefaultSelection<Prisma.$NewsArticlePayload>
/**
 * Model Tag
 * 
 */
export type Tag = $Result.DefaultSelection<Prisma.$TagPayload>
/**
 * Model CompanyRelationship
 * 
 */
export type CompanyRelationship = $Result.DefaultSelection<Prisma.$CompanyRelationshipPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TagType: {
  company: 'company',
  product: 'product',
  news: 'news'
};

export type TagType = (typeof TagType)[keyof typeof TagType]


export const RelationshipType: {
  competitor: 'competitor',
  partner: 'partner',
  subsidiary: 'subsidiary',
  parent: 'parent'
};

export type RelationshipType = (typeof RelationshipType)[keyof typeof RelationshipType]

}

export type TagType = $Enums.TagType

export const TagType: typeof $Enums.TagType

export type RelationshipType = $Enums.RelationshipType

export const RelationshipType: typeof $Enums.RelationshipType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Companies
 * const companies = await prisma.company.findMany()
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
   * // Fetch zero or more Companies
   * const companies = await prisma.company.findMany()
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.company`: Exposes CRUD operations for the **Company** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companies
    * const companies = await prisma.company.findMany()
    * ```
    */
  get company(): Prisma.CompanyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.investor`: Exposes CRUD operations for the **Investor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Investors
    * const investors = await prisma.investor.findMany()
    * ```
    */
  get investor(): Prisma.InvestorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.founder`: Exposes CRUD operations for the **Founder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Founders
    * const founders = await prisma.founder.findMany()
    * ```
    */
  get founder(): Prisma.FounderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fundingRound`: Exposes CRUD operations for the **FundingRound** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FundingRounds
    * const fundingRounds = await prisma.fundingRound.findMany()
    * ```
    */
  get fundingRound(): Prisma.FundingRoundDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.newsArticle`: Exposes CRUD operations for the **NewsArticle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NewsArticles
    * const newsArticles = await prisma.newsArticle.findMany()
    * ```
    */
  get newsArticle(): Prisma.NewsArticleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tag`: Exposes CRUD operations for the **Tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tag.findMany()
    * ```
    */
  get tag(): Prisma.TagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.companyRelationship`: Exposes CRUD operations for the **CompanyRelationship** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CompanyRelationships
    * const companyRelationships = await prisma.companyRelationship.findMany()
    * ```
    */
  get companyRelationship(): Prisma.CompanyRelationshipDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
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
    Company: 'Company',
    Investor: 'Investor',
    Founder: 'Founder',
    Product: 'Product',
    FundingRound: 'FundingRound',
    NewsArticle: 'NewsArticle',
    Tag: 'Tag',
    CompanyRelationship: 'CompanyRelationship'
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
      modelProps: "company" | "investor" | "founder" | "product" | "fundingRound" | "newsArticle" | "tag" | "companyRelationship"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Company: {
        payload: Prisma.$CompanyPayload<ExtArgs>
        fields: Prisma.CompanyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findFirst: {
            args: Prisma.CompanyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findMany: {
            args: Prisma.CompanyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          create: {
            args: Prisma.CompanyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          createMany: {
            args: Prisma.CompanyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompanyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          delete: {
            args: Prisma.CompanyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          update: {
            args: Prisma.CompanyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          deleteMany: {
            args: Prisma.CompanyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompanyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompanyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          upsert: {
            args: Prisma.CompanyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompany>
          }
          groupBy: {
            args: Prisma.CompanyGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanyGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanyCountArgs<ExtArgs>
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number
          }
        }
      }
      Investor: {
        payload: Prisma.$InvestorPayload<ExtArgs>
        fields: Prisma.InvestorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvestorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvestorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestorPayload>
          }
          findFirst: {
            args: Prisma.InvestorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvestorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestorPayload>
          }
          findMany: {
            args: Prisma.InvestorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestorPayload>[]
          }
          create: {
            args: Prisma.InvestorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestorPayload>
          }
          createMany: {
            args: Prisma.InvestorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InvestorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestorPayload>[]
          }
          delete: {
            args: Prisma.InvestorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestorPayload>
          }
          update: {
            args: Prisma.InvestorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestorPayload>
          }
          deleteMany: {
            args: Prisma.InvestorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InvestorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InvestorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestorPayload>[]
          }
          upsert: {
            args: Prisma.InvestorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestorPayload>
          }
          aggregate: {
            args: Prisma.InvestorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvestor>
          }
          groupBy: {
            args: Prisma.InvestorGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvestorGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvestorCountArgs<ExtArgs>
            result: $Utils.Optional<InvestorCountAggregateOutputType> | number
          }
        }
      }
      Founder: {
        payload: Prisma.$FounderPayload<ExtArgs>
        fields: Prisma.FounderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FounderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FounderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FounderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FounderPayload>
          }
          findFirst: {
            args: Prisma.FounderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FounderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FounderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FounderPayload>
          }
          findMany: {
            args: Prisma.FounderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FounderPayload>[]
          }
          create: {
            args: Prisma.FounderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FounderPayload>
          }
          createMany: {
            args: Prisma.FounderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FounderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FounderPayload>[]
          }
          delete: {
            args: Prisma.FounderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FounderPayload>
          }
          update: {
            args: Prisma.FounderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FounderPayload>
          }
          deleteMany: {
            args: Prisma.FounderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FounderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FounderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FounderPayload>[]
          }
          upsert: {
            args: Prisma.FounderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FounderPayload>
          }
          aggregate: {
            args: Prisma.FounderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFounder>
          }
          groupBy: {
            args: Prisma.FounderGroupByArgs<ExtArgs>
            result: $Utils.Optional<FounderGroupByOutputType>[]
          }
          count: {
            args: Prisma.FounderCountArgs<ExtArgs>
            result: $Utils.Optional<FounderCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      FundingRound: {
        payload: Prisma.$FundingRoundPayload<ExtArgs>
        fields: Prisma.FundingRoundFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FundingRoundFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundingRoundPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FundingRoundFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundingRoundPayload>
          }
          findFirst: {
            args: Prisma.FundingRoundFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundingRoundPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FundingRoundFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundingRoundPayload>
          }
          findMany: {
            args: Prisma.FundingRoundFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundingRoundPayload>[]
          }
          create: {
            args: Prisma.FundingRoundCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundingRoundPayload>
          }
          createMany: {
            args: Prisma.FundingRoundCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FundingRoundCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundingRoundPayload>[]
          }
          delete: {
            args: Prisma.FundingRoundDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundingRoundPayload>
          }
          update: {
            args: Prisma.FundingRoundUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundingRoundPayload>
          }
          deleteMany: {
            args: Prisma.FundingRoundDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FundingRoundUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FundingRoundUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundingRoundPayload>[]
          }
          upsert: {
            args: Prisma.FundingRoundUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundingRoundPayload>
          }
          aggregate: {
            args: Prisma.FundingRoundAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFundingRound>
          }
          groupBy: {
            args: Prisma.FundingRoundGroupByArgs<ExtArgs>
            result: $Utils.Optional<FundingRoundGroupByOutputType>[]
          }
          count: {
            args: Prisma.FundingRoundCountArgs<ExtArgs>
            result: $Utils.Optional<FundingRoundCountAggregateOutputType> | number
          }
        }
      }
      NewsArticle: {
        payload: Prisma.$NewsArticlePayload<ExtArgs>
        fields: Prisma.NewsArticleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NewsArticleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticlePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NewsArticleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticlePayload>
          }
          findFirst: {
            args: Prisma.NewsArticleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticlePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NewsArticleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticlePayload>
          }
          findMany: {
            args: Prisma.NewsArticleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticlePayload>[]
          }
          create: {
            args: Prisma.NewsArticleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticlePayload>
          }
          createMany: {
            args: Prisma.NewsArticleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NewsArticleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticlePayload>[]
          }
          delete: {
            args: Prisma.NewsArticleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticlePayload>
          }
          update: {
            args: Prisma.NewsArticleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticlePayload>
          }
          deleteMany: {
            args: Prisma.NewsArticleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NewsArticleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NewsArticleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticlePayload>[]
          }
          upsert: {
            args: Prisma.NewsArticleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticlePayload>
          }
          aggregate: {
            args: Prisma.NewsArticleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNewsArticle>
          }
          groupBy: {
            args: Prisma.NewsArticleGroupByArgs<ExtArgs>
            result: $Utils.Optional<NewsArticleGroupByOutputType>[]
          }
          count: {
            args: Prisma.NewsArticleCountArgs<ExtArgs>
            result: $Utils.Optional<NewsArticleCountAggregateOutputType> | number
          }
        }
      }
      Tag: {
        payload: Prisma.$TagPayload<ExtArgs>
        fields: Prisma.TagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findFirst: {
            args: Prisma.TagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findMany: {
            args: Prisma.TagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          create: {
            args: Prisma.TagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          createMany: {
            args: Prisma.TagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          delete: {
            args: Prisma.TagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          update: {
            args: Prisma.TagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          deleteMany: {
            args: Prisma.TagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          upsert: {
            args: Prisma.TagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          aggregate: {
            args: Prisma.TagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTag>
          }
          groupBy: {
            args: Prisma.TagGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagGroupByOutputType>[]
          }
          count: {
            args: Prisma.TagCountArgs<ExtArgs>
            result: $Utils.Optional<TagCountAggregateOutputType> | number
          }
        }
      }
      CompanyRelationship: {
        payload: Prisma.$CompanyRelationshipPayload<ExtArgs>
        fields: Prisma.CompanyRelationshipFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanyRelationshipFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyRelationshipPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanyRelationshipFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyRelationshipPayload>
          }
          findFirst: {
            args: Prisma.CompanyRelationshipFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyRelationshipPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanyRelationshipFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyRelationshipPayload>
          }
          findMany: {
            args: Prisma.CompanyRelationshipFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyRelationshipPayload>[]
          }
          create: {
            args: Prisma.CompanyRelationshipCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyRelationshipPayload>
          }
          createMany: {
            args: Prisma.CompanyRelationshipCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompanyRelationshipCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyRelationshipPayload>[]
          }
          delete: {
            args: Prisma.CompanyRelationshipDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyRelationshipPayload>
          }
          update: {
            args: Prisma.CompanyRelationshipUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyRelationshipPayload>
          }
          deleteMany: {
            args: Prisma.CompanyRelationshipDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompanyRelationshipUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompanyRelationshipUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyRelationshipPayload>[]
          }
          upsert: {
            args: Prisma.CompanyRelationshipUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyRelationshipPayload>
          }
          aggregate: {
            args: Prisma.CompanyRelationshipAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompanyRelationship>
          }
          groupBy: {
            args: Prisma.CompanyRelationshipGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanyRelationshipGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanyRelationshipCountArgs<ExtArgs>
            result: $Utils.Optional<CompanyRelationshipCountAggregateOutputType> | number
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
    company?: CompanyOmit
    investor?: InvestorOmit
    founder?: FounderOmit
    product?: ProductOmit
    fundingRound?: FundingRoundOmit
    newsArticle?: NewsArticleOmit
    tag?: TagOmit
    companyRelationship?: CompanyRelationshipOmit
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
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    founders: number
    products: number
    fundingRounds: number
    relatedFrom: number
    relatedTo: number
    newsArticles: number
    tags: number
  }

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    founders?: boolean | CompanyCountOutputTypeCountFoundersArgs
    products?: boolean | CompanyCountOutputTypeCountProductsArgs
    fundingRounds?: boolean | CompanyCountOutputTypeCountFundingRoundsArgs
    relatedFrom?: boolean | CompanyCountOutputTypeCountRelatedFromArgs
    relatedTo?: boolean | CompanyCountOutputTypeCountRelatedToArgs
    newsArticles?: boolean | CompanyCountOutputTypeCountNewsArticlesArgs
    tags?: boolean | CompanyCountOutputTypeCountTagsArgs
  }

  // Custom InputTypes
  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountFoundersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FounderWhereInput
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountFundingRoundsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FundingRoundWhereInput
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountRelatedFromArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyRelationshipWhereInput
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountRelatedToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyRelationshipWhereInput
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountNewsArticlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsArticleWhereInput
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
  }


  /**
   * Count Type InvestorCountOutputType
   */

  export type InvestorCountOutputType = {
    leadRounds: number
  }

  export type InvestorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leadRounds?: boolean | InvestorCountOutputTypeCountLeadRoundsArgs
  }

  // Custom InputTypes
  /**
   * InvestorCountOutputType without action
   */
  export type InvestorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestorCountOutputType
     */
    select?: InvestorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InvestorCountOutputType without action
   */
  export type InvestorCountOutputTypeCountLeadRoundsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FundingRoundWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    tags: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tags?: boolean | ProductCountOutputTypeCountTagsArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
  }


  /**
   * Count Type NewsArticleCountOutputType
   */

  export type NewsArticleCountOutputType = {
    companies: number
  }

  export type NewsArticleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    companies?: boolean | NewsArticleCountOutputTypeCountCompaniesArgs
  }

  // Custom InputTypes
  /**
   * NewsArticleCountOutputType without action
   */
  export type NewsArticleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticleCountOutputType
     */
    select?: NewsArticleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NewsArticleCountOutputType without action
   */
  export type NewsArticleCountOutputTypeCountCompaniesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyWhereInput
  }


  /**
   * Count Type TagCountOutputType
   */

  export type TagCountOutputType = {
    companies: number
    products: number
  }

  export type TagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    companies?: boolean | TagCountOutputTypeCountCompaniesArgs
    products?: boolean | TagCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagCountOutputType
     */
    select?: TagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountCompaniesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyWhereInput
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null
    _avg: CompanyAvgAggregateOutputType | null
    _sum: CompanySumAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  export type CompanyAvgAggregateOutputType = {
    fundingTotal: number | null
    employeeCount: number | null
    foundedYear: number | null
    valuation: number | null
    growthScore: number | null
    dataConfidenceScore: number | null
  }

  export type CompanySumAggregateOutputType = {
    fundingTotal: bigint | null
    employeeCount: number | null
    foundedYear: number | null
    valuation: bigint | null
    growthScore: number | null
    dataConfidenceScore: number | null
  }

  export type CompanyMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    description: string | null
    category: string | null
    fundingTotal: bigint | null
    employeeCount: number | null
    foundedYear: number | null
    hqCity: string | null
    hqCountry: string | null
    logoUrl: string | null
    website: string | null
    stage: string | null
    isUnicorn: boolean | null
    valuation: bigint | null
    growthScore: number | null
    lastScrapedAt: Date | null
    dataConfidenceScore: number | null
    claimedBy: string | null
    claimedAt: Date | null
  }

  export type CompanyMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    description: string | null
    category: string | null
    fundingTotal: bigint | null
    employeeCount: number | null
    foundedYear: number | null
    hqCity: string | null
    hqCountry: string | null
    logoUrl: string | null
    website: string | null
    stage: string | null
    isUnicorn: boolean | null
    valuation: bigint | null
    growthScore: number | null
    lastScrapedAt: Date | null
    dataConfidenceScore: number | null
    claimedBy: string | null
    claimedAt: Date | null
  }

  export type CompanyCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    description: number
    category: number
    fundingTotal: number
    employeeCount: number
    foundedYear: number
    hqCity: number
    hqCountry: number
    logoUrl: number
    website: number
    stage: number
    isUnicorn: number
    valuation: number
    growthScore: number
    lastScrapedAt: number
    dataConfidenceScore: number
    claimedBy: number
    claimedAt: number
    _all: number
  }


  export type CompanyAvgAggregateInputType = {
    fundingTotal?: true
    employeeCount?: true
    foundedYear?: true
    valuation?: true
    growthScore?: true
    dataConfidenceScore?: true
  }

  export type CompanySumAggregateInputType = {
    fundingTotal?: true
    employeeCount?: true
    foundedYear?: true
    valuation?: true
    growthScore?: true
    dataConfidenceScore?: true
  }

  export type CompanyMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    category?: true
    fundingTotal?: true
    employeeCount?: true
    foundedYear?: true
    hqCity?: true
    hqCountry?: true
    logoUrl?: true
    website?: true
    stage?: true
    isUnicorn?: true
    valuation?: true
    growthScore?: true
    lastScrapedAt?: true
    dataConfidenceScore?: true
    claimedBy?: true
    claimedAt?: true
  }

  export type CompanyMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    category?: true
    fundingTotal?: true
    employeeCount?: true
    foundedYear?: true
    hqCity?: true
    hqCountry?: true
    logoUrl?: true
    website?: true
    stage?: true
    isUnicorn?: true
    valuation?: true
    growthScore?: true
    lastScrapedAt?: true
    dataConfidenceScore?: true
    claimedBy?: true
    claimedAt?: true
  }

  export type CompanyCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    category?: true
    fundingTotal?: true
    employeeCount?: true
    foundedYear?: true
    hqCity?: true
    hqCountry?: true
    logoUrl?: true
    website?: true
    stage?: true
    isUnicorn?: true
    valuation?: true
    growthScore?: true
    lastScrapedAt?: true
    dataConfidenceScore?: true
    claimedBy?: true
    claimedAt?: true
    _all?: true
  }

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Company to aggregate.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Companies
    **/
    _count?: true | CompanyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompanyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompanySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyMaxAggregateInputType
  }

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
        [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>
  }




  export type CompanyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyWhereInput
    orderBy?: CompanyOrderByWithAggregationInput | CompanyOrderByWithAggregationInput[]
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum
    having?: CompanyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyCountAggregateInputType | true
    _avg?: CompanyAvgAggregateInputType
    _sum?: CompanySumAggregateInputType
    _min?: CompanyMinAggregateInputType
    _max?: CompanyMaxAggregateInputType
  }

  export type CompanyGroupByOutputType = {
    id: string
    name: string
    slug: string
    description: string | null
    category: string
    fundingTotal: bigint | null
    employeeCount: number | null
    foundedYear: number | null
    hqCity: string | null
    hqCountry: string | null
    logoUrl: string | null
    website: string | null
    stage: string | null
    isUnicorn: boolean | null
    valuation: bigint | null
    growthScore: number | null
    lastScrapedAt: Date | null
    dataConfidenceScore: number | null
    claimedBy: string | null
    claimedAt: Date | null
    _count: CompanyCountAggregateOutputType | null
    _avg: CompanyAvgAggregateOutputType | null
    _sum: CompanySumAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  type GetCompanyGroupByPayload<T extends CompanyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
        }
      >
    >


  export type CompanySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    category?: boolean
    fundingTotal?: boolean
    employeeCount?: boolean
    foundedYear?: boolean
    hqCity?: boolean
    hqCountry?: boolean
    logoUrl?: boolean
    website?: boolean
    stage?: boolean
    isUnicorn?: boolean
    valuation?: boolean
    growthScore?: boolean
    lastScrapedAt?: boolean
    dataConfidenceScore?: boolean
    claimedBy?: boolean
    claimedAt?: boolean
    founders?: boolean | Company$foundersArgs<ExtArgs>
    products?: boolean | Company$productsArgs<ExtArgs>
    fundingRounds?: boolean | Company$fundingRoundsArgs<ExtArgs>
    relatedFrom?: boolean | Company$relatedFromArgs<ExtArgs>
    relatedTo?: boolean | Company$relatedToArgs<ExtArgs>
    newsArticles?: boolean | Company$newsArticlesArgs<ExtArgs>
    tags?: boolean | Company$tagsArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["company"]>

  export type CompanySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    category?: boolean
    fundingTotal?: boolean
    employeeCount?: boolean
    foundedYear?: boolean
    hqCity?: boolean
    hqCountry?: boolean
    logoUrl?: boolean
    website?: boolean
    stage?: boolean
    isUnicorn?: boolean
    valuation?: boolean
    growthScore?: boolean
    lastScrapedAt?: boolean
    dataConfidenceScore?: boolean
    claimedBy?: boolean
    claimedAt?: boolean
  }, ExtArgs["result"]["company"]>

  export type CompanySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    category?: boolean
    fundingTotal?: boolean
    employeeCount?: boolean
    foundedYear?: boolean
    hqCity?: boolean
    hqCountry?: boolean
    logoUrl?: boolean
    website?: boolean
    stage?: boolean
    isUnicorn?: boolean
    valuation?: boolean
    growthScore?: boolean
    lastScrapedAt?: boolean
    dataConfidenceScore?: boolean
    claimedBy?: boolean
    claimedAt?: boolean
  }, ExtArgs["result"]["company"]>

  export type CompanySelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    category?: boolean
    fundingTotal?: boolean
    employeeCount?: boolean
    foundedYear?: boolean
    hqCity?: boolean
    hqCountry?: boolean
    logoUrl?: boolean
    website?: boolean
    stage?: boolean
    isUnicorn?: boolean
    valuation?: boolean
    growthScore?: boolean
    lastScrapedAt?: boolean
    dataConfidenceScore?: boolean
    claimedBy?: boolean
    claimedAt?: boolean
  }

  export type CompanyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "description" | "category" | "fundingTotal" | "employeeCount" | "foundedYear" | "hqCity" | "hqCountry" | "logoUrl" | "website" | "stage" | "isUnicorn" | "valuation" | "growthScore" | "lastScrapedAt" | "dataConfidenceScore" | "claimedBy" | "claimedAt", ExtArgs["result"]["company"]>
  export type CompanyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    founders?: boolean | Company$foundersArgs<ExtArgs>
    products?: boolean | Company$productsArgs<ExtArgs>
    fundingRounds?: boolean | Company$fundingRoundsArgs<ExtArgs>
    relatedFrom?: boolean | Company$relatedFromArgs<ExtArgs>
    relatedTo?: boolean | Company$relatedToArgs<ExtArgs>
    newsArticles?: boolean | Company$newsArticlesArgs<ExtArgs>
    tags?: boolean | Company$tagsArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CompanyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CompanyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CompanyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Company"
    objects: {
      founders: Prisma.$FounderPayload<ExtArgs>[]
      products: Prisma.$ProductPayload<ExtArgs>[]
      fundingRounds: Prisma.$FundingRoundPayload<ExtArgs>[]
      relatedFrom: Prisma.$CompanyRelationshipPayload<ExtArgs>[]
      relatedTo: Prisma.$CompanyRelationshipPayload<ExtArgs>[]
      newsArticles: Prisma.$NewsArticlePayload<ExtArgs>[]
      tags: Prisma.$TagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      description: string | null
      category: string
      fundingTotal: bigint | null
      employeeCount: number | null
      foundedYear: number | null
      hqCity: string | null
      hqCountry: string | null
      logoUrl: string | null
      website: string | null
      stage: string | null
      isUnicorn: boolean | null
      valuation: bigint | null
      growthScore: number | null
      lastScrapedAt: Date | null
      dataConfidenceScore: number | null
      claimedBy: string | null
      claimedAt: Date | null
    }, ExtArgs["result"]["company"]>
    composites: {}
  }

  type CompanyGetPayload<S extends boolean | null | undefined | CompanyDefaultArgs> = $Result.GetResult<Prisma.$CompanyPayload, S>

  type CompanyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompanyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompanyCountAggregateInputType | true
    }

  export interface CompanyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Company'], meta: { name: 'Company' } }
    /**
     * Find zero or one Company that matches the filter.
     * @param {CompanyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompanyFindUniqueArgs>(args: SelectSubset<T, CompanyFindUniqueArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Company that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompanyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompanyFindUniqueOrThrowArgs>(args: SelectSubset<T, CompanyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompanyFindFirstArgs>(args?: SelectSubset<T, CompanyFindFirstArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompanyFindFirstOrThrowArgs>(args?: SelectSubset<T, CompanyFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     * 
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompanyFindManyArgs>(args?: SelectSubset<T, CompanyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Company.
     * @param {CompanyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     * 
     */
    create<T extends CompanyCreateArgs>(args: SelectSubset<T, CompanyCreateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Companies.
     * @param {CompanyCreateManyArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompanyCreateManyArgs>(args?: SelectSubset<T, CompanyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Companies and returns the data saved in the database.
     * @param {CompanyCreateManyAndReturnArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompanyCreateManyAndReturnArgs>(args?: SelectSubset<T, CompanyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Company.
     * @param {CompanyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     * 
     */
    delete<T extends CompanyDeleteArgs>(args: SelectSubset<T, CompanyDeleteArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Company.
     * @param {CompanyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompanyUpdateArgs>(args: SelectSubset<T, CompanyUpdateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Companies.
     * @param {CompanyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompanyDeleteManyArgs>(args?: SelectSubset<T, CompanyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompanyUpdateManyArgs>(args: SelectSubset<T, CompanyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies and returns the data updated in the database.
     * @param {CompanyUpdateManyAndReturnArgs} args - Arguments to update many Companies.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.updateManyAndReturn({
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
    updateManyAndReturn<T extends CompanyUpdateManyAndReturnArgs>(args: SelectSubset<T, CompanyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Company.
     * @param {CompanyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     */
    upsert<T extends CompanyUpsertArgs>(args: SelectSubset<T, CompanyUpsertArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
    **/
    count<T extends CompanyCountArgs>(
      args?: Subset<T, CompanyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompanyAggregateArgs>(args: Subset<T, CompanyAggregateArgs>): Prisma.PrismaPromise<GetCompanyAggregateType<T>>

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyGroupByArgs} args - Group by arguments.
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
      T extends CompanyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyGroupByArgs['orderBy'] }
        : { orderBy?: CompanyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CompanyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Company model
   */
  readonly fields: CompanyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    founders<T extends Company$foundersArgs<ExtArgs> = {}>(args?: Subset<T, Company$foundersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FounderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    products<T extends Company$productsArgs<ExtArgs> = {}>(args?: Subset<T, Company$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    fundingRounds<T extends Company$fundingRoundsArgs<ExtArgs> = {}>(args?: Subset<T, Company$fundingRoundsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FundingRoundPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    relatedFrom<T extends Company$relatedFromArgs<ExtArgs> = {}>(args?: Subset<T, Company$relatedFromArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyRelationshipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    relatedTo<T extends Company$relatedToArgs<ExtArgs> = {}>(args?: Subset<T, Company$relatedToArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyRelationshipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    newsArticles<T extends Company$newsArticlesArgs<ExtArgs> = {}>(args?: Subset<T, Company$newsArticlesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tags<T extends Company$tagsArgs<ExtArgs> = {}>(args?: Subset<T, Company$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Company model
   */
  interface CompanyFieldRefs {
    readonly id: FieldRef<"Company", 'String'>
    readonly name: FieldRef<"Company", 'String'>
    readonly slug: FieldRef<"Company", 'String'>
    readonly description: FieldRef<"Company", 'String'>
    readonly category: FieldRef<"Company", 'String'>
    readonly fundingTotal: FieldRef<"Company", 'BigInt'>
    readonly employeeCount: FieldRef<"Company", 'Int'>
    readonly foundedYear: FieldRef<"Company", 'Int'>
    readonly hqCity: FieldRef<"Company", 'String'>
    readonly hqCountry: FieldRef<"Company", 'String'>
    readonly logoUrl: FieldRef<"Company", 'String'>
    readonly website: FieldRef<"Company", 'String'>
    readonly stage: FieldRef<"Company", 'String'>
    readonly isUnicorn: FieldRef<"Company", 'Boolean'>
    readonly valuation: FieldRef<"Company", 'BigInt'>
    readonly growthScore: FieldRef<"Company", 'Float'>
    readonly lastScrapedAt: FieldRef<"Company", 'DateTime'>
    readonly dataConfidenceScore: FieldRef<"Company", 'Float'>
    readonly claimedBy: FieldRef<"Company", 'String'>
    readonly claimedAt: FieldRef<"Company", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Company findUnique
   */
  export type CompanyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findUniqueOrThrow
   */
  export type CompanyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findFirst
   */
  export type CompanyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findFirstOrThrow
   */
  export type CompanyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findMany
   */
  export type CompanyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Companies to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company create
   */
  export type CompanyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to create a Company.
     */
    data: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
  }

  /**
   * Company createMany
   */
  export type CompanyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company createManyAndReturn
   */
  export type CompanyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company update
   */
  export type CompanyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to update a Company.
     */
    data: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
    /**
     * Choose, which Company to update.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company updateMany
   */
  export type CompanyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
  }

  /**
   * Company updateManyAndReturn
   */
  export type CompanyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
  }

  /**
   * Company upsert
   */
  export type CompanyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The filter to search for the Company to update in case it exists.
     */
    where: CompanyWhereUniqueInput
    /**
     * In case the Company found by the `where` argument doesn't exist, create a new Company with this data.
     */
    create: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
    /**
     * In case the Company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
  }

  /**
   * Company delete
   */
  export type CompanyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter which Company to delete.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company deleteMany
   */
  export type CompanyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Companies to delete
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to delete.
     */
    limit?: number
  }

  /**
   * Company.founders
   */
  export type Company$foundersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Founder
     */
    select?: FounderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Founder
     */
    omit?: FounderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FounderInclude<ExtArgs> | null
    where?: FounderWhereInput
    orderBy?: FounderOrderByWithRelationInput | FounderOrderByWithRelationInput[]
    cursor?: FounderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FounderScalarFieldEnum | FounderScalarFieldEnum[]
  }

  /**
   * Company.products
   */
  export type Company$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Company.fundingRounds
   */
  export type Company$fundingRoundsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundingRound
     */
    select?: FundingRoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FundingRound
     */
    omit?: FundingRoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundingRoundInclude<ExtArgs> | null
    where?: FundingRoundWhereInput
    orderBy?: FundingRoundOrderByWithRelationInput | FundingRoundOrderByWithRelationInput[]
    cursor?: FundingRoundWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FundingRoundScalarFieldEnum | FundingRoundScalarFieldEnum[]
  }

  /**
   * Company.relatedFrom
   */
  export type Company$relatedFromArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyRelationship
     */
    select?: CompanyRelationshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyRelationship
     */
    omit?: CompanyRelationshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyRelationshipInclude<ExtArgs> | null
    where?: CompanyRelationshipWhereInput
    orderBy?: CompanyRelationshipOrderByWithRelationInput | CompanyRelationshipOrderByWithRelationInput[]
    cursor?: CompanyRelationshipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompanyRelationshipScalarFieldEnum | CompanyRelationshipScalarFieldEnum[]
  }

  /**
   * Company.relatedTo
   */
  export type Company$relatedToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyRelationship
     */
    select?: CompanyRelationshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyRelationship
     */
    omit?: CompanyRelationshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyRelationshipInclude<ExtArgs> | null
    where?: CompanyRelationshipWhereInput
    orderBy?: CompanyRelationshipOrderByWithRelationInput | CompanyRelationshipOrderByWithRelationInput[]
    cursor?: CompanyRelationshipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompanyRelationshipScalarFieldEnum | CompanyRelationshipScalarFieldEnum[]
  }

  /**
   * Company.newsArticles
   */
  export type Company$newsArticlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleInclude<ExtArgs> | null
    where?: NewsArticleWhereInput
    orderBy?: NewsArticleOrderByWithRelationInput | NewsArticleOrderByWithRelationInput[]
    cursor?: NewsArticleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NewsArticleScalarFieldEnum | NewsArticleScalarFieldEnum[]
  }

  /**
   * Company.tags
   */
  export type Company$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    where?: TagWhereInput
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    cursor?: TagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Company without action
   */
  export type CompanyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
  }


  /**
   * Model Investor
   */

  export type AggregateInvestor = {
    _count: InvestorCountAggregateOutputType | null
    _avg: InvestorAvgAggregateOutputType | null
    _sum: InvestorSumAggregateOutputType | null
    _min: InvestorMinAggregateOutputType | null
    _max: InvestorMaxAggregateOutputType | null
  }

  export type InvestorAvgAggregateOutputType = {
    aum: number | null
    portfolioCount: number | null
    avgCheckSize: number | null
    fundNumber: number | null
  }

  export type InvestorSumAggregateOutputType = {
    aum: bigint | null
    portfolioCount: number | null
    avgCheckSize: bigint | null
    fundNumber: number | null
  }

  export type InvestorMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    type: string | null
    bio: string | null
    aum: bigint | null
    portfolioCount: number | null
    location: string | null
    logoUrl: string | null
    avgCheckSize: bigint | null
    fundNumber: number | null
  }

  export type InvestorMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    type: string | null
    bio: string | null
    aum: bigint | null
    portfolioCount: number | null
    location: string | null
    logoUrl: string | null
    avgCheckSize: bigint | null
    fundNumber: number | null
  }

  export type InvestorCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    type: number
    bio: number
    aum: number
    portfolioCount: number
    stageFocus: number
    sectorFocus: number
    location: number
    logoUrl: number
    avgCheckSize: number
    fundNumber: number
    _all: number
  }


  export type InvestorAvgAggregateInputType = {
    aum?: true
    portfolioCount?: true
    avgCheckSize?: true
    fundNumber?: true
  }

  export type InvestorSumAggregateInputType = {
    aum?: true
    portfolioCount?: true
    avgCheckSize?: true
    fundNumber?: true
  }

  export type InvestorMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    type?: true
    bio?: true
    aum?: true
    portfolioCount?: true
    location?: true
    logoUrl?: true
    avgCheckSize?: true
    fundNumber?: true
  }

  export type InvestorMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    type?: true
    bio?: true
    aum?: true
    portfolioCount?: true
    location?: true
    logoUrl?: true
    avgCheckSize?: true
    fundNumber?: true
  }

  export type InvestorCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    type?: true
    bio?: true
    aum?: true
    portfolioCount?: true
    stageFocus?: true
    sectorFocus?: true
    location?: true
    logoUrl?: true
    avgCheckSize?: true
    fundNumber?: true
    _all?: true
  }

  export type InvestorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Investor to aggregate.
     */
    where?: InvestorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Investors to fetch.
     */
    orderBy?: InvestorOrderByWithRelationInput | InvestorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvestorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Investors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Investors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Investors
    **/
    _count?: true | InvestorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvestorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvestorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvestorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvestorMaxAggregateInputType
  }

  export type GetInvestorAggregateType<T extends InvestorAggregateArgs> = {
        [P in keyof T & keyof AggregateInvestor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvestor[P]>
      : GetScalarType<T[P], AggregateInvestor[P]>
  }




  export type InvestorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvestorWhereInput
    orderBy?: InvestorOrderByWithAggregationInput | InvestorOrderByWithAggregationInput[]
    by: InvestorScalarFieldEnum[] | InvestorScalarFieldEnum
    having?: InvestorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvestorCountAggregateInputType | true
    _avg?: InvestorAvgAggregateInputType
    _sum?: InvestorSumAggregateInputType
    _min?: InvestorMinAggregateInputType
    _max?: InvestorMaxAggregateInputType
  }

  export type InvestorGroupByOutputType = {
    id: string
    name: string
    slug: string
    type: string | null
    bio: string | null
    aum: bigint | null
    portfolioCount: number | null
    stageFocus: string[]
    sectorFocus: string[]
    location: string | null
    logoUrl: string | null
    avgCheckSize: bigint | null
    fundNumber: number | null
    _count: InvestorCountAggregateOutputType | null
    _avg: InvestorAvgAggregateOutputType | null
    _sum: InvestorSumAggregateOutputType | null
    _min: InvestorMinAggregateOutputType | null
    _max: InvestorMaxAggregateOutputType | null
  }

  type GetInvestorGroupByPayload<T extends InvestorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvestorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvestorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvestorGroupByOutputType[P]>
            : GetScalarType<T[P], InvestorGroupByOutputType[P]>
        }
      >
    >


  export type InvestorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    type?: boolean
    bio?: boolean
    aum?: boolean
    portfolioCount?: boolean
    stageFocus?: boolean
    sectorFocus?: boolean
    location?: boolean
    logoUrl?: boolean
    avgCheckSize?: boolean
    fundNumber?: boolean
    leadRounds?: boolean | Investor$leadRoundsArgs<ExtArgs>
    _count?: boolean | InvestorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["investor"]>

  export type InvestorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    type?: boolean
    bio?: boolean
    aum?: boolean
    portfolioCount?: boolean
    stageFocus?: boolean
    sectorFocus?: boolean
    location?: boolean
    logoUrl?: boolean
    avgCheckSize?: boolean
    fundNumber?: boolean
  }, ExtArgs["result"]["investor"]>

  export type InvestorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    type?: boolean
    bio?: boolean
    aum?: boolean
    portfolioCount?: boolean
    stageFocus?: boolean
    sectorFocus?: boolean
    location?: boolean
    logoUrl?: boolean
    avgCheckSize?: boolean
    fundNumber?: boolean
  }, ExtArgs["result"]["investor"]>

  export type InvestorSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    type?: boolean
    bio?: boolean
    aum?: boolean
    portfolioCount?: boolean
    stageFocus?: boolean
    sectorFocus?: boolean
    location?: boolean
    logoUrl?: boolean
    avgCheckSize?: boolean
    fundNumber?: boolean
  }

  export type InvestorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "type" | "bio" | "aum" | "portfolioCount" | "stageFocus" | "sectorFocus" | "location" | "logoUrl" | "avgCheckSize" | "fundNumber", ExtArgs["result"]["investor"]>
  export type InvestorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leadRounds?: boolean | Investor$leadRoundsArgs<ExtArgs>
    _count?: boolean | InvestorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InvestorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type InvestorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $InvestorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Investor"
    objects: {
      leadRounds: Prisma.$FundingRoundPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      type: string | null
      bio: string | null
      aum: bigint | null
      portfolioCount: number | null
      stageFocus: string[]
      sectorFocus: string[]
      location: string | null
      logoUrl: string | null
      avgCheckSize: bigint | null
      fundNumber: number | null
    }, ExtArgs["result"]["investor"]>
    composites: {}
  }

  type InvestorGetPayload<S extends boolean | null | undefined | InvestorDefaultArgs> = $Result.GetResult<Prisma.$InvestorPayload, S>

  type InvestorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InvestorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InvestorCountAggregateInputType | true
    }

  export interface InvestorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Investor'], meta: { name: 'Investor' } }
    /**
     * Find zero or one Investor that matches the filter.
     * @param {InvestorFindUniqueArgs} args - Arguments to find a Investor
     * @example
     * // Get one Investor
     * const investor = await prisma.investor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvestorFindUniqueArgs>(args: SelectSubset<T, InvestorFindUniqueArgs<ExtArgs>>): Prisma__InvestorClient<$Result.GetResult<Prisma.$InvestorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Investor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InvestorFindUniqueOrThrowArgs} args - Arguments to find a Investor
     * @example
     * // Get one Investor
     * const investor = await prisma.investor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvestorFindUniqueOrThrowArgs>(args: SelectSubset<T, InvestorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvestorClient<$Result.GetResult<Prisma.$InvestorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Investor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestorFindFirstArgs} args - Arguments to find a Investor
     * @example
     * // Get one Investor
     * const investor = await prisma.investor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvestorFindFirstArgs>(args?: SelectSubset<T, InvestorFindFirstArgs<ExtArgs>>): Prisma__InvestorClient<$Result.GetResult<Prisma.$InvestorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Investor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestorFindFirstOrThrowArgs} args - Arguments to find a Investor
     * @example
     * // Get one Investor
     * const investor = await prisma.investor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvestorFindFirstOrThrowArgs>(args?: SelectSubset<T, InvestorFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvestorClient<$Result.GetResult<Prisma.$InvestorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Investors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Investors
     * const investors = await prisma.investor.findMany()
     * 
     * // Get first 10 Investors
     * const investors = await prisma.investor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const investorWithIdOnly = await prisma.investor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InvestorFindManyArgs>(args?: SelectSubset<T, InvestorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvestorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Investor.
     * @param {InvestorCreateArgs} args - Arguments to create a Investor.
     * @example
     * // Create one Investor
     * const Investor = await prisma.investor.create({
     *   data: {
     *     // ... data to create a Investor
     *   }
     * })
     * 
     */
    create<T extends InvestorCreateArgs>(args: SelectSubset<T, InvestorCreateArgs<ExtArgs>>): Prisma__InvestorClient<$Result.GetResult<Prisma.$InvestorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Investors.
     * @param {InvestorCreateManyArgs} args - Arguments to create many Investors.
     * @example
     * // Create many Investors
     * const investor = await prisma.investor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InvestorCreateManyArgs>(args?: SelectSubset<T, InvestorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Investors and returns the data saved in the database.
     * @param {InvestorCreateManyAndReturnArgs} args - Arguments to create many Investors.
     * @example
     * // Create many Investors
     * const investor = await prisma.investor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Investors and only return the `id`
     * const investorWithIdOnly = await prisma.investor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InvestorCreateManyAndReturnArgs>(args?: SelectSubset<T, InvestorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvestorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Investor.
     * @param {InvestorDeleteArgs} args - Arguments to delete one Investor.
     * @example
     * // Delete one Investor
     * const Investor = await prisma.investor.delete({
     *   where: {
     *     // ... filter to delete one Investor
     *   }
     * })
     * 
     */
    delete<T extends InvestorDeleteArgs>(args: SelectSubset<T, InvestorDeleteArgs<ExtArgs>>): Prisma__InvestorClient<$Result.GetResult<Prisma.$InvestorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Investor.
     * @param {InvestorUpdateArgs} args - Arguments to update one Investor.
     * @example
     * // Update one Investor
     * const investor = await prisma.investor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InvestorUpdateArgs>(args: SelectSubset<T, InvestorUpdateArgs<ExtArgs>>): Prisma__InvestorClient<$Result.GetResult<Prisma.$InvestorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Investors.
     * @param {InvestorDeleteManyArgs} args - Arguments to filter Investors to delete.
     * @example
     * // Delete a few Investors
     * const { count } = await prisma.investor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InvestorDeleteManyArgs>(args?: SelectSubset<T, InvestorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Investors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Investors
     * const investor = await prisma.investor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InvestorUpdateManyArgs>(args: SelectSubset<T, InvestorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Investors and returns the data updated in the database.
     * @param {InvestorUpdateManyAndReturnArgs} args - Arguments to update many Investors.
     * @example
     * // Update many Investors
     * const investor = await prisma.investor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Investors and only return the `id`
     * const investorWithIdOnly = await prisma.investor.updateManyAndReturn({
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
    updateManyAndReturn<T extends InvestorUpdateManyAndReturnArgs>(args: SelectSubset<T, InvestorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvestorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Investor.
     * @param {InvestorUpsertArgs} args - Arguments to update or create a Investor.
     * @example
     * // Update or create a Investor
     * const investor = await prisma.investor.upsert({
     *   create: {
     *     // ... data to create a Investor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Investor we want to update
     *   }
     * })
     */
    upsert<T extends InvestorUpsertArgs>(args: SelectSubset<T, InvestorUpsertArgs<ExtArgs>>): Prisma__InvestorClient<$Result.GetResult<Prisma.$InvestorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Investors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestorCountArgs} args - Arguments to filter Investors to count.
     * @example
     * // Count the number of Investors
     * const count = await prisma.investor.count({
     *   where: {
     *     // ... the filter for the Investors we want to count
     *   }
     * })
    **/
    count<T extends InvestorCountArgs>(
      args?: Subset<T, InvestorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvestorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Investor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InvestorAggregateArgs>(args: Subset<T, InvestorAggregateArgs>): Prisma.PrismaPromise<GetInvestorAggregateType<T>>

    /**
     * Group by Investor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestorGroupByArgs} args - Group by arguments.
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
      T extends InvestorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvestorGroupByArgs['orderBy'] }
        : { orderBy?: InvestorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InvestorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvestorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Investor model
   */
  readonly fields: InvestorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Investor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvestorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    leadRounds<T extends Investor$leadRoundsArgs<ExtArgs> = {}>(args?: Subset<T, Investor$leadRoundsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FundingRoundPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Investor model
   */
  interface InvestorFieldRefs {
    readonly id: FieldRef<"Investor", 'String'>
    readonly name: FieldRef<"Investor", 'String'>
    readonly slug: FieldRef<"Investor", 'String'>
    readonly type: FieldRef<"Investor", 'String'>
    readonly bio: FieldRef<"Investor", 'String'>
    readonly aum: FieldRef<"Investor", 'BigInt'>
    readonly portfolioCount: FieldRef<"Investor", 'Int'>
    readonly stageFocus: FieldRef<"Investor", 'String[]'>
    readonly sectorFocus: FieldRef<"Investor", 'String[]'>
    readonly location: FieldRef<"Investor", 'String'>
    readonly logoUrl: FieldRef<"Investor", 'String'>
    readonly avgCheckSize: FieldRef<"Investor", 'BigInt'>
    readonly fundNumber: FieldRef<"Investor", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Investor findUnique
   */
  export type InvestorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investor
     */
    select?: InvestorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investor
     */
    omit?: InvestorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestorInclude<ExtArgs> | null
    /**
     * Filter, which Investor to fetch.
     */
    where: InvestorWhereUniqueInput
  }

  /**
   * Investor findUniqueOrThrow
   */
  export type InvestorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investor
     */
    select?: InvestorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investor
     */
    omit?: InvestorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestorInclude<ExtArgs> | null
    /**
     * Filter, which Investor to fetch.
     */
    where: InvestorWhereUniqueInput
  }

  /**
   * Investor findFirst
   */
  export type InvestorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investor
     */
    select?: InvestorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investor
     */
    omit?: InvestorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestorInclude<ExtArgs> | null
    /**
     * Filter, which Investor to fetch.
     */
    where?: InvestorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Investors to fetch.
     */
    orderBy?: InvestorOrderByWithRelationInput | InvestorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Investors.
     */
    cursor?: InvestorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Investors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Investors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Investors.
     */
    distinct?: InvestorScalarFieldEnum | InvestorScalarFieldEnum[]
  }

  /**
   * Investor findFirstOrThrow
   */
  export type InvestorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investor
     */
    select?: InvestorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investor
     */
    omit?: InvestorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestorInclude<ExtArgs> | null
    /**
     * Filter, which Investor to fetch.
     */
    where?: InvestorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Investors to fetch.
     */
    orderBy?: InvestorOrderByWithRelationInput | InvestorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Investors.
     */
    cursor?: InvestorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Investors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Investors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Investors.
     */
    distinct?: InvestorScalarFieldEnum | InvestorScalarFieldEnum[]
  }

  /**
   * Investor findMany
   */
  export type InvestorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investor
     */
    select?: InvestorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investor
     */
    omit?: InvestorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestorInclude<ExtArgs> | null
    /**
     * Filter, which Investors to fetch.
     */
    where?: InvestorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Investors to fetch.
     */
    orderBy?: InvestorOrderByWithRelationInput | InvestorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Investors.
     */
    cursor?: InvestorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Investors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Investors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Investors.
     */
    distinct?: InvestorScalarFieldEnum | InvestorScalarFieldEnum[]
  }

  /**
   * Investor create
   */
  export type InvestorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investor
     */
    select?: InvestorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investor
     */
    omit?: InvestorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestorInclude<ExtArgs> | null
    /**
     * The data needed to create a Investor.
     */
    data: XOR<InvestorCreateInput, InvestorUncheckedCreateInput>
  }

  /**
   * Investor createMany
   */
  export type InvestorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Investors.
     */
    data: InvestorCreateManyInput | InvestorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Investor createManyAndReturn
   */
  export type InvestorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investor
     */
    select?: InvestorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Investor
     */
    omit?: InvestorOmit<ExtArgs> | null
    /**
     * The data used to create many Investors.
     */
    data: InvestorCreateManyInput | InvestorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Investor update
   */
  export type InvestorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investor
     */
    select?: InvestorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investor
     */
    omit?: InvestorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestorInclude<ExtArgs> | null
    /**
     * The data needed to update a Investor.
     */
    data: XOR<InvestorUpdateInput, InvestorUncheckedUpdateInput>
    /**
     * Choose, which Investor to update.
     */
    where: InvestorWhereUniqueInput
  }

  /**
   * Investor updateMany
   */
  export type InvestorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Investors.
     */
    data: XOR<InvestorUpdateManyMutationInput, InvestorUncheckedUpdateManyInput>
    /**
     * Filter which Investors to update
     */
    where?: InvestorWhereInput
    /**
     * Limit how many Investors to update.
     */
    limit?: number
  }

  /**
   * Investor updateManyAndReturn
   */
  export type InvestorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investor
     */
    select?: InvestorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Investor
     */
    omit?: InvestorOmit<ExtArgs> | null
    /**
     * The data used to update Investors.
     */
    data: XOR<InvestorUpdateManyMutationInput, InvestorUncheckedUpdateManyInput>
    /**
     * Filter which Investors to update
     */
    where?: InvestorWhereInput
    /**
     * Limit how many Investors to update.
     */
    limit?: number
  }

  /**
   * Investor upsert
   */
  export type InvestorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investor
     */
    select?: InvestorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investor
     */
    omit?: InvestorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestorInclude<ExtArgs> | null
    /**
     * The filter to search for the Investor to update in case it exists.
     */
    where: InvestorWhereUniqueInput
    /**
     * In case the Investor found by the `where` argument doesn't exist, create a new Investor with this data.
     */
    create: XOR<InvestorCreateInput, InvestorUncheckedCreateInput>
    /**
     * In case the Investor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvestorUpdateInput, InvestorUncheckedUpdateInput>
  }

  /**
   * Investor delete
   */
  export type InvestorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investor
     */
    select?: InvestorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investor
     */
    omit?: InvestorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestorInclude<ExtArgs> | null
    /**
     * Filter which Investor to delete.
     */
    where: InvestorWhereUniqueInput
  }

  /**
   * Investor deleteMany
   */
  export type InvestorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Investors to delete
     */
    where?: InvestorWhereInput
    /**
     * Limit how many Investors to delete.
     */
    limit?: number
  }

  /**
   * Investor.leadRounds
   */
  export type Investor$leadRoundsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundingRound
     */
    select?: FundingRoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FundingRound
     */
    omit?: FundingRoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundingRoundInclude<ExtArgs> | null
    where?: FundingRoundWhereInput
    orderBy?: FundingRoundOrderByWithRelationInput | FundingRoundOrderByWithRelationInput[]
    cursor?: FundingRoundWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FundingRoundScalarFieldEnum | FundingRoundScalarFieldEnum[]
  }

  /**
   * Investor without action
   */
  export type InvestorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investor
     */
    select?: InvestorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investor
     */
    omit?: InvestorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestorInclude<ExtArgs> | null
  }


  /**
   * Model Founder
   */

  export type AggregateFounder = {
    _count: FounderCountAggregateOutputType | null
    _min: FounderMinAggregateOutputType | null
    _max: FounderMaxAggregateOutputType | null
  }

  export type FounderMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    title: string | null
    companyId: string | null
    bio: string | null
    twitter: string | null
    linkedin: string | null
    location: string | null
    photoUrl: string | null
  }

  export type FounderMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    title: string | null
    companyId: string | null
    bio: string | null
    twitter: string | null
    linkedin: string | null
    location: string | null
    photoUrl: string | null
  }

  export type FounderCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    title: number
    companyId: number
    bio: number
    twitter: number
    linkedin: number
    location: number
    photoUrl: number
    _all: number
  }


  export type FounderMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    title?: true
    companyId?: true
    bio?: true
    twitter?: true
    linkedin?: true
    location?: true
    photoUrl?: true
  }

  export type FounderMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    title?: true
    companyId?: true
    bio?: true
    twitter?: true
    linkedin?: true
    location?: true
    photoUrl?: true
  }

  export type FounderCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    title?: true
    companyId?: true
    bio?: true
    twitter?: true
    linkedin?: true
    location?: true
    photoUrl?: true
    _all?: true
  }

  export type FounderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Founder to aggregate.
     */
    where?: FounderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Founders to fetch.
     */
    orderBy?: FounderOrderByWithRelationInput | FounderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FounderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Founders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Founders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Founders
    **/
    _count?: true | FounderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FounderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FounderMaxAggregateInputType
  }

  export type GetFounderAggregateType<T extends FounderAggregateArgs> = {
        [P in keyof T & keyof AggregateFounder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFounder[P]>
      : GetScalarType<T[P], AggregateFounder[P]>
  }




  export type FounderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FounderWhereInput
    orderBy?: FounderOrderByWithAggregationInput | FounderOrderByWithAggregationInput[]
    by: FounderScalarFieldEnum[] | FounderScalarFieldEnum
    having?: FounderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FounderCountAggregateInputType | true
    _min?: FounderMinAggregateInputType
    _max?: FounderMaxAggregateInputType
  }

  export type FounderGroupByOutputType = {
    id: string
    name: string
    slug: string
    title: string | null
    companyId: string
    bio: string | null
    twitter: string | null
    linkedin: string | null
    location: string | null
    photoUrl: string | null
    _count: FounderCountAggregateOutputType | null
    _min: FounderMinAggregateOutputType | null
    _max: FounderMaxAggregateOutputType | null
  }

  type GetFounderGroupByPayload<T extends FounderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FounderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FounderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FounderGroupByOutputType[P]>
            : GetScalarType<T[P], FounderGroupByOutputType[P]>
        }
      >
    >


  export type FounderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    title?: boolean
    companyId?: boolean
    bio?: boolean
    twitter?: boolean
    linkedin?: boolean
    location?: boolean
    photoUrl?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["founder"]>

  export type FounderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    title?: boolean
    companyId?: boolean
    bio?: boolean
    twitter?: boolean
    linkedin?: boolean
    location?: boolean
    photoUrl?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["founder"]>

  export type FounderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    title?: boolean
    companyId?: boolean
    bio?: boolean
    twitter?: boolean
    linkedin?: boolean
    location?: boolean
    photoUrl?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["founder"]>

  export type FounderSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    title?: boolean
    companyId?: boolean
    bio?: boolean
    twitter?: boolean
    linkedin?: boolean
    location?: boolean
    photoUrl?: boolean
  }

  export type FounderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "title" | "companyId" | "bio" | "twitter" | "linkedin" | "location" | "photoUrl", ExtArgs["result"]["founder"]>
  export type FounderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type FounderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type FounderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }

  export type $FounderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Founder"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      title: string | null
      companyId: string
      bio: string | null
      twitter: string | null
      linkedin: string | null
      location: string | null
      photoUrl: string | null
    }, ExtArgs["result"]["founder"]>
    composites: {}
  }

  type FounderGetPayload<S extends boolean | null | undefined | FounderDefaultArgs> = $Result.GetResult<Prisma.$FounderPayload, S>

  type FounderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FounderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FounderCountAggregateInputType | true
    }

  export interface FounderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Founder'], meta: { name: 'Founder' } }
    /**
     * Find zero or one Founder that matches the filter.
     * @param {FounderFindUniqueArgs} args - Arguments to find a Founder
     * @example
     * // Get one Founder
     * const founder = await prisma.founder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FounderFindUniqueArgs>(args: SelectSubset<T, FounderFindUniqueArgs<ExtArgs>>): Prisma__FounderClient<$Result.GetResult<Prisma.$FounderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Founder that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FounderFindUniqueOrThrowArgs} args - Arguments to find a Founder
     * @example
     * // Get one Founder
     * const founder = await prisma.founder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FounderFindUniqueOrThrowArgs>(args: SelectSubset<T, FounderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FounderClient<$Result.GetResult<Prisma.$FounderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Founder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FounderFindFirstArgs} args - Arguments to find a Founder
     * @example
     * // Get one Founder
     * const founder = await prisma.founder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FounderFindFirstArgs>(args?: SelectSubset<T, FounderFindFirstArgs<ExtArgs>>): Prisma__FounderClient<$Result.GetResult<Prisma.$FounderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Founder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FounderFindFirstOrThrowArgs} args - Arguments to find a Founder
     * @example
     * // Get one Founder
     * const founder = await prisma.founder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FounderFindFirstOrThrowArgs>(args?: SelectSubset<T, FounderFindFirstOrThrowArgs<ExtArgs>>): Prisma__FounderClient<$Result.GetResult<Prisma.$FounderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Founders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FounderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Founders
     * const founders = await prisma.founder.findMany()
     * 
     * // Get first 10 Founders
     * const founders = await prisma.founder.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const founderWithIdOnly = await prisma.founder.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FounderFindManyArgs>(args?: SelectSubset<T, FounderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FounderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Founder.
     * @param {FounderCreateArgs} args - Arguments to create a Founder.
     * @example
     * // Create one Founder
     * const Founder = await prisma.founder.create({
     *   data: {
     *     // ... data to create a Founder
     *   }
     * })
     * 
     */
    create<T extends FounderCreateArgs>(args: SelectSubset<T, FounderCreateArgs<ExtArgs>>): Prisma__FounderClient<$Result.GetResult<Prisma.$FounderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Founders.
     * @param {FounderCreateManyArgs} args - Arguments to create many Founders.
     * @example
     * // Create many Founders
     * const founder = await prisma.founder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FounderCreateManyArgs>(args?: SelectSubset<T, FounderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Founders and returns the data saved in the database.
     * @param {FounderCreateManyAndReturnArgs} args - Arguments to create many Founders.
     * @example
     * // Create many Founders
     * const founder = await prisma.founder.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Founders and only return the `id`
     * const founderWithIdOnly = await prisma.founder.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FounderCreateManyAndReturnArgs>(args?: SelectSubset<T, FounderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FounderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Founder.
     * @param {FounderDeleteArgs} args - Arguments to delete one Founder.
     * @example
     * // Delete one Founder
     * const Founder = await prisma.founder.delete({
     *   where: {
     *     // ... filter to delete one Founder
     *   }
     * })
     * 
     */
    delete<T extends FounderDeleteArgs>(args: SelectSubset<T, FounderDeleteArgs<ExtArgs>>): Prisma__FounderClient<$Result.GetResult<Prisma.$FounderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Founder.
     * @param {FounderUpdateArgs} args - Arguments to update one Founder.
     * @example
     * // Update one Founder
     * const founder = await prisma.founder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FounderUpdateArgs>(args: SelectSubset<T, FounderUpdateArgs<ExtArgs>>): Prisma__FounderClient<$Result.GetResult<Prisma.$FounderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Founders.
     * @param {FounderDeleteManyArgs} args - Arguments to filter Founders to delete.
     * @example
     * // Delete a few Founders
     * const { count } = await prisma.founder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FounderDeleteManyArgs>(args?: SelectSubset<T, FounderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Founders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FounderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Founders
     * const founder = await prisma.founder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FounderUpdateManyArgs>(args: SelectSubset<T, FounderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Founders and returns the data updated in the database.
     * @param {FounderUpdateManyAndReturnArgs} args - Arguments to update many Founders.
     * @example
     * // Update many Founders
     * const founder = await prisma.founder.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Founders and only return the `id`
     * const founderWithIdOnly = await prisma.founder.updateManyAndReturn({
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
    updateManyAndReturn<T extends FounderUpdateManyAndReturnArgs>(args: SelectSubset<T, FounderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FounderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Founder.
     * @param {FounderUpsertArgs} args - Arguments to update or create a Founder.
     * @example
     * // Update or create a Founder
     * const founder = await prisma.founder.upsert({
     *   create: {
     *     // ... data to create a Founder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Founder we want to update
     *   }
     * })
     */
    upsert<T extends FounderUpsertArgs>(args: SelectSubset<T, FounderUpsertArgs<ExtArgs>>): Prisma__FounderClient<$Result.GetResult<Prisma.$FounderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Founders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FounderCountArgs} args - Arguments to filter Founders to count.
     * @example
     * // Count the number of Founders
     * const count = await prisma.founder.count({
     *   where: {
     *     // ... the filter for the Founders we want to count
     *   }
     * })
    **/
    count<T extends FounderCountArgs>(
      args?: Subset<T, FounderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FounderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Founder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FounderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FounderAggregateArgs>(args: Subset<T, FounderAggregateArgs>): Prisma.PrismaPromise<GetFounderAggregateType<T>>

    /**
     * Group by Founder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FounderGroupByArgs} args - Group by arguments.
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
      T extends FounderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FounderGroupByArgs['orderBy'] }
        : { orderBy?: FounderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FounderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFounderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Founder model
   */
  readonly fields: FounderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Founder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FounderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Founder model
   */
  interface FounderFieldRefs {
    readonly id: FieldRef<"Founder", 'String'>
    readonly name: FieldRef<"Founder", 'String'>
    readonly slug: FieldRef<"Founder", 'String'>
    readonly title: FieldRef<"Founder", 'String'>
    readonly companyId: FieldRef<"Founder", 'String'>
    readonly bio: FieldRef<"Founder", 'String'>
    readonly twitter: FieldRef<"Founder", 'String'>
    readonly linkedin: FieldRef<"Founder", 'String'>
    readonly location: FieldRef<"Founder", 'String'>
    readonly photoUrl: FieldRef<"Founder", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Founder findUnique
   */
  export type FounderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Founder
     */
    select?: FounderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Founder
     */
    omit?: FounderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FounderInclude<ExtArgs> | null
    /**
     * Filter, which Founder to fetch.
     */
    where: FounderWhereUniqueInput
  }

  /**
   * Founder findUniqueOrThrow
   */
  export type FounderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Founder
     */
    select?: FounderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Founder
     */
    omit?: FounderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FounderInclude<ExtArgs> | null
    /**
     * Filter, which Founder to fetch.
     */
    where: FounderWhereUniqueInput
  }

  /**
   * Founder findFirst
   */
  export type FounderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Founder
     */
    select?: FounderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Founder
     */
    omit?: FounderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FounderInclude<ExtArgs> | null
    /**
     * Filter, which Founder to fetch.
     */
    where?: FounderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Founders to fetch.
     */
    orderBy?: FounderOrderByWithRelationInput | FounderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Founders.
     */
    cursor?: FounderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Founders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Founders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Founders.
     */
    distinct?: FounderScalarFieldEnum | FounderScalarFieldEnum[]
  }

  /**
   * Founder findFirstOrThrow
   */
  export type FounderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Founder
     */
    select?: FounderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Founder
     */
    omit?: FounderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FounderInclude<ExtArgs> | null
    /**
     * Filter, which Founder to fetch.
     */
    where?: FounderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Founders to fetch.
     */
    orderBy?: FounderOrderByWithRelationInput | FounderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Founders.
     */
    cursor?: FounderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Founders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Founders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Founders.
     */
    distinct?: FounderScalarFieldEnum | FounderScalarFieldEnum[]
  }

  /**
   * Founder findMany
   */
  export type FounderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Founder
     */
    select?: FounderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Founder
     */
    omit?: FounderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FounderInclude<ExtArgs> | null
    /**
     * Filter, which Founders to fetch.
     */
    where?: FounderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Founders to fetch.
     */
    orderBy?: FounderOrderByWithRelationInput | FounderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Founders.
     */
    cursor?: FounderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Founders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Founders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Founders.
     */
    distinct?: FounderScalarFieldEnum | FounderScalarFieldEnum[]
  }

  /**
   * Founder create
   */
  export type FounderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Founder
     */
    select?: FounderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Founder
     */
    omit?: FounderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FounderInclude<ExtArgs> | null
    /**
     * The data needed to create a Founder.
     */
    data: XOR<FounderCreateInput, FounderUncheckedCreateInput>
  }

  /**
   * Founder createMany
   */
  export type FounderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Founders.
     */
    data: FounderCreateManyInput | FounderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Founder createManyAndReturn
   */
  export type FounderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Founder
     */
    select?: FounderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Founder
     */
    omit?: FounderOmit<ExtArgs> | null
    /**
     * The data used to create many Founders.
     */
    data: FounderCreateManyInput | FounderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FounderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Founder update
   */
  export type FounderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Founder
     */
    select?: FounderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Founder
     */
    omit?: FounderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FounderInclude<ExtArgs> | null
    /**
     * The data needed to update a Founder.
     */
    data: XOR<FounderUpdateInput, FounderUncheckedUpdateInput>
    /**
     * Choose, which Founder to update.
     */
    where: FounderWhereUniqueInput
  }

  /**
   * Founder updateMany
   */
  export type FounderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Founders.
     */
    data: XOR<FounderUpdateManyMutationInput, FounderUncheckedUpdateManyInput>
    /**
     * Filter which Founders to update
     */
    where?: FounderWhereInput
    /**
     * Limit how many Founders to update.
     */
    limit?: number
  }

  /**
   * Founder updateManyAndReturn
   */
  export type FounderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Founder
     */
    select?: FounderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Founder
     */
    omit?: FounderOmit<ExtArgs> | null
    /**
     * The data used to update Founders.
     */
    data: XOR<FounderUpdateManyMutationInput, FounderUncheckedUpdateManyInput>
    /**
     * Filter which Founders to update
     */
    where?: FounderWhereInput
    /**
     * Limit how many Founders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FounderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Founder upsert
   */
  export type FounderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Founder
     */
    select?: FounderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Founder
     */
    omit?: FounderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FounderInclude<ExtArgs> | null
    /**
     * The filter to search for the Founder to update in case it exists.
     */
    where: FounderWhereUniqueInput
    /**
     * In case the Founder found by the `where` argument doesn't exist, create a new Founder with this data.
     */
    create: XOR<FounderCreateInput, FounderUncheckedCreateInput>
    /**
     * In case the Founder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FounderUpdateInput, FounderUncheckedUpdateInput>
  }

  /**
   * Founder delete
   */
  export type FounderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Founder
     */
    select?: FounderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Founder
     */
    omit?: FounderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FounderInclude<ExtArgs> | null
    /**
     * Filter which Founder to delete.
     */
    where: FounderWhereUniqueInput
  }

  /**
   * Founder deleteMany
   */
  export type FounderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Founders to delete
     */
    where?: FounderWhereInput
    /**
     * Limit how many Founders to delete.
     */
    limit?: number
  }

  /**
   * Founder without action
   */
  export type FounderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Founder
     */
    select?: FounderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Founder
     */
    omit?: FounderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FounderInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    upvotes: number | null
  }

  export type ProductSumAggregateOutputType = {
    upvotes: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: string | null
    companyId: string | null
    name: string | null
    slug: string | null
    description: string | null
    category: string | null
    launchDate: Date | null
    upvotes: number | null
    websiteUrl: string | null
  }

  export type ProductMaxAggregateOutputType = {
    id: string | null
    companyId: string | null
    name: string | null
    slug: string | null
    description: string | null
    category: string | null
    launchDate: Date | null
    upvotes: number | null
    websiteUrl: string | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    companyId: number
    name: number
    slug: number
    description: number
    category: number
    launchDate: number
    upvotes: number
    websiteUrl: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    upvotes?: true
  }

  export type ProductSumAggregateInputType = {
    upvotes?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    companyId?: true
    name?: true
    slug?: true
    description?: true
    category?: true
    launchDate?: true
    upvotes?: true
    websiteUrl?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    companyId?: true
    name?: true
    slug?: true
    description?: true
    category?: true
    launchDate?: true
    upvotes?: true
    websiteUrl?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    companyId?: true
    name?: true
    slug?: true
    description?: true
    category?: true
    launchDate?: true
    upvotes?: true
    websiteUrl?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: string
    companyId: string
    name: string
    slug: string
    description: string | null
    category: string | null
    launchDate: Date | null
    upvotes: number | null
    websiteUrl: string | null
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    category?: boolean
    launchDate?: boolean
    upvotes?: boolean
    websiteUrl?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    tags?: boolean | Product$tagsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    category?: boolean
    launchDate?: boolean
    upvotes?: boolean
    websiteUrl?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    category?: boolean
    launchDate?: boolean
    upvotes?: boolean
    websiteUrl?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    companyId?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    category?: boolean
    launchDate?: boolean
    upvotes?: boolean
    websiteUrl?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "companyId" | "name" | "slug" | "description" | "category" | "launchDate" | "upvotes" | "websiteUrl", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    tags?: boolean | Product$tagsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type ProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>
      tags: Prisma.$TagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      companyId: string
      name: string
      slug: string
      description: string | null
      category: string | null
      launchDate: Date | null
      upvotes: number | null
      websiteUrl: string | null
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productWithIdOnly = await prisma.product.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
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
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tags<T extends Product$tagsArgs<ExtArgs> = {}>(args?: Subset<T, Product$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'String'>
    readonly companyId: FieldRef<"Product", 'String'>
    readonly name: FieldRef<"Product", 'String'>
    readonly slug: FieldRef<"Product", 'String'>
    readonly description: FieldRef<"Product", 'String'>
    readonly category: FieldRef<"Product", 'String'>
    readonly launchDate: FieldRef<"Product", 'DateTime'>
    readonly upvotes: FieldRef<"Product", 'Int'>
    readonly websiteUrl: FieldRef<"Product", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.tags
   */
  export type Product$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    where?: TagWhereInput
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    cursor?: TagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model FundingRound
   */

  export type AggregateFundingRound = {
    _count: FundingRoundCountAggregateOutputType | null
    _avg: FundingRoundAvgAggregateOutputType | null
    _sum: FundingRoundSumAggregateOutputType | null
    _min: FundingRoundMinAggregateOutputType | null
    _max: FundingRoundMaxAggregateOutputType | null
  }

  export type FundingRoundAvgAggregateOutputType = {
    amount: number | null
  }

  export type FundingRoundSumAggregateOutputType = {
    amount: bigint | null
  }

  export type FundingRoundMinAggregateOutputType = {
    id: string | null
    companyId: string | null
    roundType: string | null
    amount: bigint | null
    currency: string | null
    date: Date | null
    leadInvestorId: string | null
  }

  export type FundingRoundMaxAggregateOutputType = {
    id: string | null
    companyId: string | null
    roundType: string | null
    amount: bigint | null
    currency: string | null
    date: Date | null
    leadInvestorId: string | null
  }

  export type FundingRoundCountAggregateOutputType = {
    id: number
    companyId: number
    roundType: number
    amount: number
    currency: number
    date: number
    leadInvestorId: number
    coInvestors: number
    _all: number
  }


  export type FundingRoundAvgAggregateInputType = {
    amount?: true
  }

  export type FundingRoundSumAggregateInputType = {
    amount?: true
  }

  export type FundingRoundMinAggregateInputType = {
    id?: true
    companyId?: true
    roundType?: true
    amount?: true
    currency?: true
    date?: true
    leadInvestorId?: true
  }

  export type FundingRoundMaxAggregateInputType = {
    id?: true
    companyId?: true
    roundType?: true
    amount?: true
    currency?: true
    date?: true
    leadInvestorId?: true
  }

  export type FundingRoundCountAggregateInputType = {
    id?: true
    companyId?: true
    roundType?: true
    amount?: true
    currency?: true
    date?: true
    leadInvestorId?: true
    coInvestors?: true
    _all?: true
  }

  export type FundingRoundAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FundingRound to aggregate.
     */
    where?: FundingRoundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FundingRounds to fetch.
     */
    orderBy?: FundingRoundOrderByWithRelationInput | FundingRoundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FundingRoundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FundingRounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FundingRounds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FundingRounds
    **/
    _count?: true | FundingRoundCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FundingRoundAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FundingRoundSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FundingRoundMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FundingRoundMaxAggregateInputType
  }

  export type GetFundingRoundAggregateType<T extends FundingRoundAggregateArgs> = {
        [P in keyof T & keyof AggregateFundingRound]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFundingRound[P]>
      : GetScalarType<T[P], AggregateFundingRound[P]>
  }




  export type FundingRoundGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FundingRoundWhereInput
    orderBy?: FundingRoundOrderByWithAggregationInput | FundingRoundOrderByWithAggregationInput[]
    by: FundingRoundScalarFieldEnum[] | FundingRoundScalarFieldEnum
    having?: FundingRoundScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FundingRoundCountAggregateInputType | true
    _avg?: FundingRoundAvgAggregateInputType
    _sum?: FundingRoundSumAggregateInputType
    _min?: FundingRoundMinAggregateInputType
    _max?: FundingRoundMaxAggregateInputType
  }

  export type FundingRoundGroupByOutputType = {
    id: string
    companyId: string
    roundType: string
    amount: bigint | null
    currency: string | null
    date: Date
    leadInvestorId: string | null
    coInvestors: string[]
    _count: FundingRoundCountAggregateOutputType | null
    _avg: FundingRoundAvgAggregateOutputType | null
    _sum: FundingRoundSumAggregateOutputType | null
    _min: FundingRoundMinAggregateOutputType | null
    _max: FundingRoundMaxAggregateOutputType | null
  }

  type GetFundingRoundGroupByPayload<T extends FundingRoundGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FundingRoundGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FundingRoundGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FundingRoundGroupByOutputType[P]>
            : GetScalarType<T[P], FundingRoundGroupByOutputType[P]>
        }
      >
    >


  export type FundingRoundSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    roundType?: boolean
    amount?: boolean
    currency?: boolean
    date?: boolean
    leadInvestorId?: boolean
    coInvestors?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    leadInvestor?: boolean | FundingRound$leadInvestorArgs<ExtArgs>
  }, ExtArgs["result"]["fundingRound"]>

  export type FundingRoundSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    roundType?: boolean
    amount?: boolean
    currency?: boolean
    date?: boolean
    leadInvestorId?: boolean
    coInvestors?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    leadInvestor?: boolean | FundingRound$leadInvestorArgs<ExtArgs>
  }, ExtArgs["result"]["fundingRound"]>

  export type FundingRoundSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    roundType?: boolean
    amount?: boolean
    currency?: boolean
    date?: boolean
    leadInvestorId?: boolean
    coInvestors?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    leadInvestor?: boolean | FundingRound$leadInvestorArgs<ExtArgs>
  }, ExtArgs["result"]["fundingRound"]>

  export type FundingRoundSelectScalar = {
    id?: boolean
    companyId?: boolean
    roundType?: boolean
    amount?: boolean
    currency?: boolean
    date?: boolean
    leadInvestorId?: boolean
    coInvestors?: boolean
  }

  export type FundingRoundOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "companyId" | "roundType" | "amount" | "currency" | "date" | "leadInvestorId" | "coInvestors", ExtArgs["result"]["fundingRound"]>
  export type FundingRoundInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    leadInvestor?: boolean | FundingRound$leadInvestorArgs<ExtArgs>
  }
  export type FundingRoundIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    leadInvestor?: boolean | FundingRound$leadInvestorArgs<ExtArgs>
  }
  export type FundingRoundIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    leadInvestor?: boolean | FundingRound$leadInvestorArgs<ExtArgs>
  }

  export type $FundingRoundPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FundingRound"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>
      leadInvestor: Prisma.$InvestorPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      companyId: string
      roundType: string
      amount: bigint | null
      currency: string | null
      date: Date
      leadInvestorId: string | null
      coInvestors: string[]
    }, ExtArgs["result"]["fundingRound"]>
    composites: {}
  }

  type FundingRoundGetPayload<S extends boolean | null | undefined | FundingRoundDefaultArgs> = $Result.GetResult<Prisma.$FundingRoundPayload, S>

  type FundingRoundCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FundingRoundFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FundingRoundCountAggregateInputType | true
    }

  export interface FundingRoundDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FundingRound'], meta: { name: 'FundingRound' } }
    /**
     * Find zero or one FundingRound that matches the filter.
     * @param {FundingRoundFindUniqueArgs} args - Arguments to find a FundingRound
     * @example
     * // Get one FundingRound
     * const fundingRound = await prisma.fundingRound.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FundingRoundFindUniqueArgs>(args: SelectSubset<T, FundingRoundFindUniqueArgs<ExtArgs>>): Prisma__FundingRoundClient<$Result.GetResult<Prisma.$FundingRoundPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FundingRound that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FundingRoundFindUniqueOrThrowArgs} args - Arguments to find a FundingRound
     * @example
     * // Get one FundingRound
     * const fundingRound = await prisma.fundingRound.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FundingRoundFindUniqueOrThrowArgs>(args: SelectSubset<T, FundingRoundFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FundingRoundClient<$Result.GetResult<Prisma.$FundingRoundPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FundingRound that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundingRoundFindFirstArgs} args - Arguments to find a FundingRound
     * @example
     * // Get one FundingRound
     * const fundingRound = await prisma.fundingRound.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FundingRoundFindFirstArgs>(args?: SelectSubset<T, FundingRoundFindFirstArgs<ExtArgs>>): Prisma__FundingRoundClient<$Result.GetResult<Prisma.$FundingRoundPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FundingRound that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundingRoundFindFirstOrThrowArgs} args - Arguments to find a FundingRound
     * @example
     * // Get one FundingRound
     * const fundingRound = await prisma.fundingRound.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FundingRoundFindFirstOrThrowArgs>(args?: SelectSubset<T, FundingRoundFindFirstOrThrowArgs<ExtArgs>>): Prisma__FundingRoundClient<$Result.GetResult<Prisma.$FundingRoundPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FundingRounds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundingRoundFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FundingRounds
     * const fundingRounds = await prisma.fundingRound.findMany()
     * 
     * // Get first 10 FundingRounds
     * const fundingRounds = await prisma.fundingRound.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fundingRoundWithIdOnly = await prisma.fundingRound.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FundingRoundFindManyArgs>(args?: SelectSubset<T, FundingRoundFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FundingRoundPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FundingRound.
     * @param {FundingRoundCreateArgs} args - Arguments to create a FundingRound.
     * @example
     * // Create one FundingRound
     * const FundingRound = await prisma.fundingRound.create({
     *   data: {
     *     // ... data to create a FundingRound
     *   }
     * })
     * 
     */
    create<T extends FundingRoundCreateArgs>(args: SelectSubset<T, FundingRoundCreateArgs<ExtArgs>>): Prisma__FundingRoundClient<$Result.GetResult<Prisma.$FundingRoundPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FundingRounds.
     * @param {FundingRoundCreateManyArgs} args - Arguments to create many FundingRounds.
     * @example
     * // Create many FundingRounds
     * const fundingRound = await prisma.fundingRound.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FundingRoundCreateManyArgs>(args?: SelectSubset<T, FundingRoundCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FundingRounds and returns the data saved in the database.
     * @param {FundingRoundCreateManyAndReturnArgs} args - Arguments to create many FundingRounds.
     * @example
     * // Create many FundingRounds
     * const fundingRound = await prisma.fundingRound.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FundingRounds and only return the `id`
     * const fundingRoundWithIdOnly = await prisma.fundingRound.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FundingRoundCreateManyAndReturnArgs>(args?: SelectSubset<T, FundingRoundCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FundingRoundPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FundingRound.
     * @param {FundingRoundDeleteArgs} args - Arguments to delete one FundingRound.
     * @example
     * // Delete one FundingRound
     * const FundingRound = await prisma.fundingRound.delete({
     *   where: {
     *     // ... filter to delete one FundingRound
     *   }
     * })
     * 
     */
    delete<T extends FundingRoundDeleteArgs>(args: SelectSubset<T, FundingRoundDeleteArgs<ExtArgs>>): Prisma__FundingRoundClient<$Result.GetResult<Prisma.$FundingRoundPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FundingRound.
     * @param {FundingRoundUpdateArgs} args - Arguments to update one FundingRound.
     * @example
     * // Update one FundingRound
     * const fundingRound = await prisma.fundingRound.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FundingRoundUpdateArgs>(args: SelectSubset<T, FundingRoundUpdateArgs<ExtArgs>>): Prisma__FundingRoundClient<$Result.GetResult<Prisma.$FundingRoundPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FundingRounds.
     * @param {FundingRoundDeleteManyArgs} args - Arguments to filter FundingRounds to delete.
     * @example
     * // Delete a few FundingRounds
     * const { count } = await prisma.fundingRound.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FundingRoundDeleteManyArgs>(args?: SelectSubset<T, FundingRoundDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FundingRounds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundingRoundUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FundingRounds
     * const fundingRound = await prisma.fundingRound.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FundingRoundUpdateManyArgs>(args: SelectSubset<T, FundingRoundUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FundingRounds and returns the data updated in the database.
     * @param {FundingRoundUpdateManyAndReturnArgs} args - Arguments to update many FundingRounds.
     * @example
     * // Update many FundingRounds
     * const fundingRound = await prisma.fundingRound.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FundingRounds and only return the `id`
     * const fundingRoundWithIdOnly = await prisma.fundingRound.updateManyAndReturn({
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
    updateManyAndReturn<T extends FundingRoundUpdateManyAndReturnArgs>(args: SelectSubset<T, FundingRoundUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FundingRoundPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FundingRound.
     * @param {FundingRoundUpsertArgs} args - Arguments to update or create a FundingRound.
     * @example
     * // Update or create a FundingRound
     * const fundingRound = await prisma.fundingRound.upsert({
     *   create: {
     *     // ... data to create a FundingRound
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FundingRound we want to update
     *   }
     * })
     */
    upsert<T extends FundingRoundUpsertArgs>(args: SelectSubset<T, FundingRoundUpsertArgs<ExtArgs>>): Prisma__FundingRoundClient<$Result.GetResult<Prisma.$FundingRoundPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FundingRounds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundingRoundCountArgs} args - Arguments to filter FundingRounds to count.
     * @example
     * // Count the number of FundingRounds
     * const count = await prisma.fundingRound.count({
     *   where: {
     *     // ... the filter for the FundingRounds we want to count
     *   }
     * })
    **/
    count<T extends FundingRoundCountArgs>(
      args?: Subset<T, FundingRoundCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FundingRoundCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FundingRound.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundingRoundAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FundingRoundAggregateArgs>(args: Subset<T, FundingRoundAggregateArgs>): Prisma.PrismaPromise<GetFundingRoundAggregateType<T>>

    /**
     * Group by FundingRound.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundingRoundGroupByArgs} args - Group by arguments.
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
      T extends FundingRoundGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FundingRoundGroupByArgs['orderBy'] }
        : { orderBy?: FundingRoundGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FundingRoundGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFundingRoundGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FundingRound model
   */
  readonly fields: FundingRoundFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FundingRound.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FundingRoundClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    leadInvestor<T extends FundingRound$leadInvestorArgs<ExtArgs> = {}>(args?: Subset<T, FundingRound$leadInvestorArgs<ExtArgs>>): Prisma__InvestorClient<$Result.GetResult<Prisma.$InvestorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the FundingRound model
   */
  interface FundingRoundFieldRefs {
    readonly id: FieldRef<"FundingRound", 'String'>
    readonly companyId: FieldRef<"FundingRound", 'String'>
    readonly roundType: FieldRef<"FundingRound", 'String'>
    readonly amount: FieldRef<"FundingRound", 'BigInt'>
    readonly currency: FieldRef<"FundingRound", 'String'>
    readonly date: FieldRef<"FundingRound", 'DateTime'>
    readonly leadInvestorId: FieldRef<"FundingRound", 'String'>
    readonly coInvestors: FieldRef<"FundingRound", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * FundingRound findUnique
   */
  export type FundingRoundFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundingRound
     */
    select?: FundingRoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FundingRound
     */
    omit?: FundingRoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundingRoundInclude<ExtArgs> | null
    /**
     * Filter, which FundingRound to fetch.
     */
    where: FundingRoundWhereUniqueInput
  }

  /**
   * FundingRound findUniqueOrThrow
   */
  export type FundingRoundFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundingRound
     */
    select?: FundingRoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FundingRound
     */
    omit?: FundingRoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundingRoundInclude<ExtArgs> | null
    /**
     * Filter, which FundingRound to fetch.
     */
    where: FundingRoundWhereUniqueInput
  }

  /**
   * FundingRound findFirst
   */
  export type FundingRoundFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundingRound
     */
    select?: FundingRoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FundingRound
     */
    omit?: FundingRoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundingRoundInclude<ExtArgs> | null
    /**
     * Filter, which FundingRound to fetch.
     */
    where?: FundingRoundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FundingRounds to fetch.
     */
    orderBy?: FundingRoundOrderByWithRelationInput | FundingRoundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FundingRounds.
     */
    cursor?: FundingRoundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FundingRounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FundingRounds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FundingRounds.
     */
    distinct?: FundingRoundScalarFieldEnum | FundingRoundScalarFieldEnum[]
  }

  /**
   * FundingRound findFirstOrThrow
   */
  export type FundingRoundFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundingRound
     */
    select?: FundingRoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FundingRound
     */
    omit?: FundingRoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundingRoundInclude<ExtArgs> | null
    /**
     * Filter, which FundingRound to fetch.
     */
    where?: FundingRoundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FundingRounds to fetch.
     */
    orderBy?: FundingRoundOrderByWithRelationInput | FundingRoundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FundingRounds.
     */
    cursor?: FundingRoundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FundingRounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FundingRounds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FundingRounds.
     */
    distinct?: FundingRoundScalarFieldEnum | FundingRoundScalarFieldEnum[]
  }

  /**
   * FundingRound findMany
   */
  export type FundingRoundFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundingRound
     */
    select?: FundingRoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FundingRound
     */
    omit?: FundingRoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundingRoundInclude<ExtArgs> | null
    /**
     * Filter, which FundingRounds to fetch.
     */
    where?: FundingRoundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FundingRounds to fetch.
     */
    orderBy?: FundingRoundOrderByWithRelationInput | FundingRoundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FundingRounds.
     */
    cursor?: FundingRoundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FundingRounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FundingRounds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FundingRounds.
     */
    distinct?: FundingRoundScalarFieldEnum | FundingRoundScalarFieldEnum[]
  }

  /**
   * FundingRound create
   */
  export type FundingRoundCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundingRound
     */
    select?: FundingRoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FundingRound
     */
    omit?: FundingRoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundingRoundInclude<ExtArgs> | null
    /**
     * The data needed to create a FundingRound.
     */
    data: XOR<FundingRoundCreateInput, FundingRoundUncheckedCreateInput>
  }

  /**
   * FundingRound createMany
   */
  export type FundingRoundCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FundingRounds.
     */
    data: FundingRoundCreateManyInput | FundingRoundCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FundingRound createManyAndReturn
   */
  export type FundingRoundCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundingRound
     */
    select?: FundingRoundSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FundingRound
     */
    omit?: FundingRoundOmit<ExtArgs> | null
    /**
     * The data used to create many FundingRounds.
     */
    data: FundingRoundCreateManyInput | FundingRoundCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundingRoundIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FundingRound update
   */
  export type FundingRoundUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundingRound
     */
    select?: FundingRoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FundingRound
     */
    omit?: FundingRoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundingRoundInclude<ExtArgs> | null
    /**
     * The data needed to update a FundingRound.
     */
    data: XOR<FundingRoundUpdateInput, FundingRoundUncheckedUpdateInput>
    /**
     * Choose, which FundingRound to update.
     */
    where: FundingRoundWhereUniqueInput
  }

  /**
   * FundingRound updateMany
   */
  export type FundingRoundUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FundingRounds.
     */
    data: XOR<FundingRoundUpdateManyMutationInput, FundingRoundUncheckedUpdateManyInput>
    /**
     * Filter which FundingRounds to update
     */
    where?: FundingRoundWhereInput
    /**
     * Limit how many FundingRounds to update.
     */
    limit?: number
  }

  /**
   * FundingRound updateManyAndReturn
   */
  export type FundingRoundUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundingRound
     */
    select?: FundingRoundSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FundingRound
     */
    omit?: FundingRoundOmit<ExtArgs> | null
    /**
     * The data used to update FundingRounds.
     */
    data: XOR<FundingRoundUpdateManyMutationInput, FundingRoundUncheckedUpdateManyInput>
    /**
     * Filter which FundingRounds to update
     */
    where?: FundingRoundWhereInput
    /**
     * Limit how many FundingRounds to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundingRoundIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FundingRound upsert
   */
  export type FundingRoundUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundingRound
     */
    select?: FundingRoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FundingRound
     */
    omit?: FundingRoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundingRoundInclude<ExtArgs> | null
    /**
     * The filter to search for the FundingRound to update in case it exists.
     */
    where: FundingRoundWhereUniqueInput
    /**
     * In case the FundingRound found by the `where` argument doesn't exist, create a new FundingRound with this data.
     */
    create: XOR<FundingRoundCreateInput, FundingRoundUncheckedCreateInput>
    /**
     * In case the FundingRound was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FundingRoundUpdateInput, FundingRoundUncheckedUpdateInput>
  }

  /**
   * FundingRound delete
   */
  export type FundingRoundDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundingRound
     */
    select?: FundingRoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FundingRound
     */
    omit?: FundingRoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundingRoundInclude<ExtArgs> | null
    /**
     * Filter which FundingRound to delete.
     */
    where: FundingRoundWhereUniqueInput
  }

  /**
   * FundingRound deleteMany
   */
  export type FundingRoundDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FundingRounds to delete
     */
    where?: FundingRoundWhereInput
    /**
     * Limit how many FundingRounds to delete.
     */
    limit?: number
  }

  /**
   * FundingRound.leadInvestor
   */
  export type FundingRound$leadInvestorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investor
     */
    select?: InvestorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investor
     */
    omit?: InvestorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestorInclude<ExtArgs> | null
    where?: InvestorWhereInput
  }

  /**
   * FundingRound without action
   */
  export type FundingRoundDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundingRound
     */
    select?: FundingRoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FundingRound
     */
    omit?: FundingRoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundingRoundInclude<ExtArgs> | null
  }


  /**
   * Model NewsArticle
   */

  export type AggregateNewsArticle = {
    _count: NewsArticleCountAggregateOutputType | null
    _min: NewsArticleMinAggregateOutputType | null
    _max: NewsArticleMaxAggregateOutputType | null
  }

  export type NewsArticleMinAggregateOutputType = {
    id: string | null
    title: string | null
    url: string | null
    publishedAt: Date | null
    source: string | null
    tag: string | null
    summary: string | null
  }

  export type NewsArticleMaxAggregateOutputType = {
    id: string | null
    title: string | null
    url: string | null
    publishedAt: Date | null
    source: string | null
    tag: string | null
    summary: string | null
  }

  export type NewsArticleCountAggregateOutputType = {
    id: number
    title: number
    url: number
    publishedAt: number
    source: number
    tag: number
    relatedCompanyIds: number
    summary: number
    _all: number
  }


  export type NewsArticleMinAggregateInputType = {
    id?: true
    title?: true
    url?: true
    publishedAt?: true
    source?: true
    tag?: true
    summary?: true
  }

  export type NewsArticleMaxAggregateInputType = {
    id?: true
    title?: true
    url?: true
    publishedAt?: true
    source?: true
    tag?: true
    summary?: true
  }

  export type NewsArticleCountAggregateInputType = {
    id?: true
    title?: true
    url?: true
    publishedAt?: true
    source?: true
    tag?: true
    relatedCompanyIds?: true
    summary?: true
    _all?: true
  }

  export type NewsArticleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewsArticle to aggregate.
     */
    where?: NewsArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsArticles to fetch.
     */
    orderBy?: NewsArticleOrderByWithRelationInput | NewsArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NewsArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsArticles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsArticles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NewsArticles
    **/
    _count?: true | NewsArticleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NewsArticleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NewsArticleMaxAggregateInputType
  }

  export type GetNewsArticleAggregateType<T extends NewsArticleAggregateArgs> = {
        [P in keyof T & keyof AggregateNewsArticle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNewsArticle[P]>
      : GetScalarType<T[P], AggregateNewsArticle[P]>
  }




  export type NewsArticleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsArticleWhereInput
    orderBy?: NewsArticleOrderByWithAggregationInput | NewsArticleOrderByWithAggregationInput[]
    by: NewsArticleScalarFieldEnum[] | NewsArticleScalarFieldEnum
    having?: NewsArticleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NewsArticleCountAggregateInputType | true
    _min?: NewsArticleMinAggregateInputType
    _max?: NewsArticleMaxAggregateInputType
  }

  export type NewsArticleGroupByOutputType = {
    id: string
    title: string
    url: string
    publishedAt: Date
    source: string
    tag: string | null
    relatedCompanyIds: string[]
    summary: string | null
    _count: NewsArticleCountAggregateOutputType | null
    _min: NewsArticleMinAggregateOutputType | null
    _max: NewsArticleMaxAggregateOutputType | null
  }

  type GetNewsArticleGroupByPayload<T extends NewsArticleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NewsArticleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NewsArticleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NewsArticleGroupByOutputType[P]>
            : GetScalarType<T[P], NewsArticleGroupByOutputType[P]>
        }
      >
    >


  export type NewsArticleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    url?: boolean
    publishedAt?: boolean
    source?: boolean
    tag?: boolean
    relatedCompanyIds?: boolean
    summary?: boolean
    companies?: boolean | NewsArticle$companiesArgs<ExtArgs>
    _count?: boolean | NewsArticleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["newsArticle"]>

  export type NewsArticleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    url?: boolean
    publishedAt?: boolean
    source?: boolean
    tag?: boolean
    relatedCompanyIds?: boolean
    summary?: boolean
  }, ExtArgs["result"]["newsArticle"]>

  export type NewsArticleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    url?: boolean
    publishedAt?: boolean
    source?: boolean
    tag?: boolean
    relatedCompanyIds?: boolean
    summary?: boolean
  }, ExtArgs["result"]["newsArticle"]>

  export type NewsArticleSelectScalar = {
    id?: boolean
    title?: boolean
    url?: boolean
    publishedAt?: boolean
    source?: boolean
    tag?: boolean
    relatedCompanyIds?: boolean
    summary?: boolean
  }

  export type NewsArticleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "url" | "publishedAt" | "source" | "tag" | "relatedCompanyIds" | "summary", ExtArgs["result"]["newsArticle"]>
  export type NewsArticleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    companies?: boolean | NewsArticle$companiesArgs<ExtArgs>
    _count?: boolean | NewsArticleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type NewsArticleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type NewsArticleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $NewsArticlePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NewsArticle"
    objects: {
      companies: Prisma.$CompanyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      url: string
      publishedAt: Date
      source: string
      tag: string | null
      relatedCompanyIds: string[]
      summary: string | null
    }, ExtArgs["result"]["newsArticle"]>
    composites: {}
  }

  type NewsArticleGetPayload<S extends boolean | null | undefined | NewsArticleDefaultArgs> = $Result.GetResult<Prisma.$NewsArticlePayload, S>

  type NewsArticleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NewsArticleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NewsArticleCountAggregateInputType | true
    }

  export interface NewsArticleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NewsArticle'], meta: { name: 'NewsArticle' } }
    /**
     * Find zero or one NewsArticle that matches the filter.
     * @param {NewsArticleFindUniqueArgs} args - Arguments to find a NewsArticle
     * @example
     * // Get one NewsArticle
     * const newsArticle = await prisma.newsArticle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NewsArticleFindUniqueArgs>(args: SelectSubset<T, NewsArticleFindUniqueArgs<ExtArgs>>): Prisma__NewsArticleClient<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NewsArticle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NewsArticleFindUniqueOrThrowArgs} args - Arguments to find a NewsArticle
     * @example
     * // Get one NewsArticle
     * const newsArticle = await prisma.newsArticle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NewsArticleFindUniqueOrThrowArgs>(args: SelectSubset<T, NewsArticleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NewsArticleClient<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NewsArticle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsArticleFindFirstArgs} args - Arguments to find a NewsArticle
     * @example
     * // Get one NewsArticle
     * const newsArticle = await prisma.newsArticle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NewsArticleFindFirstArgs>(args?: SelectSubset<T, NewsArticleFindFirstArgs<ExtArgs>>): Prisma__NewsArticleClient<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NewsArticle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsArticleFindFirstOrThrowArgs} args - Arguments to find a NewsArticle
     * @example
     * // Get one NewsArticle
     * const newsArticle = await prisma.newsArticle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NewsArticleFindFirstOrThrowArgs>(args?: SelectSubset<T, NewsArticleFindFirstOrThrowArgs<ExtArgs>>): Prisma__NewsArticleClient<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NewsArticles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsArticleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NewsArticles
     * const newsArticles = await prisma.newsArticle.findMany()
     * 
     * // Get first 10 NewsArticles
     * const newsArticles = await prisma.newsArticle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const newsArticleWithIdOnly = await prisma.newsArticle.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NewsArticleFindManyArgs>(args?: SelectSubset<T, NewsArticleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NewsArticle.
     * @param {NewsArticleCreateArgs} args - Arguments to create a NewsArticle.
     * @example
     * // Create one NewsArticle
     * const NewsArticle = await prisma.newsArticle.create({
     *   data: {
     *     // ... data to create a NewsArticle
     *   }
     * })
     * 
     */
    create<T extends NewsArticleCreateArgs>(args: SelectSubset<T, NewsArticleCreateArgs<ExtArgs>>): Prisma__NewsArticleClient<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NewsArticles.
     * @param {NewsArticleCreateManyArgs} args - Arguments to create many NewsArticles.
     * @example
     * // Create many NewsArticles
     * const newsArticle = await prisma.newsArticle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NewsArticleCreateManyArgs>(args?: SelectSubset<T, NewsArticleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NewsArticles and returns the data saved in the database.
     * @param {NewsArticleCreateManyAndReturnArgs} args - Arguments to create many NewsArticles.
     * @example
     * // Create many NewsArticles
     * const newsArticle = await prisma.newsArticle.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NewsArticles and only return the `id`
     * const newsArticleWithIdOnly = await prisma.newsArticle.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NewsArticleCreateManyAndReturnArgs>(args?: SelectSubset<T, NewsArticleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NewsArticle.
     * @param {NewsArticleDeleteArgs} args - Arguments to delete one NewsArticle.
     * @example
     * // Delete one NewsArticle
     * const NewsArticle = await prisma.newsArticle.delete({
     *   where: {
     *     // ... filter to delete one NewsArticle
     *   }
     * })
     * 
     */
    delete<T extends NewsArticleDeleteArgs>(args: SelectSubset<T, NewsArticleDeleteArgs<ExtArgs>>): Prisma__NewsArticleClient<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NewsArticle.
     * @param {NewsArticleUpdateArgs} args - Arguments to update one NewsArticle.
     * @example
     * // Update one NewsArticle
     * const newsArticle = await prisma.newsArticle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NewsArticleUpdateArgs>(args: SelectSubset<T, NewsArticleUpdateArgs<ExtArgs>>): Prisma__NewsArticleClient<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NewsArticles.
     * @param {NewsArticleDeleteManyArgs} args - Arguments to filter NewsArticles to delete.
     * @example
     * // Delete a few NewsArticles
     * const { count } = await prisma.newsArticle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NewsArticleDeleteManyArgs>(args?: SelectSubset<T, NewsArticleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewsArticles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsArticleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NewsArticles
     * const newsArticle = await prisma.newsArticle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NewsArticleUpdateManyArgs>(args: SelectSubset<T, NewsArticleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewsArticles and returns the data updated in the database.
     * @param {NewsArticleUpdateManyAndReturnArgs} args - Arguments to update many NewsArticles.
     * @example
     * // Update many NewsArticles
     * const newsArticle = await prisma.newsArticle.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NewsArticles and only return the `id`
     * const newsArticleWithIdOnly = await prisma.newsArticle.updateManyAndReturn({
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
    updateManyAndReturn<T extends NewsArticleUpdateManyAndReturnArgs>(args: SelectSubset<T, NewsArticleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NewsArticle.
     * @param {NewsArticleUpsertArgs} args - Arguments to update or create a NewsArticle.
     * @example
     * // Update or create a NewsArticle
     * const newsArticle = await prisma.newsArticle.upsert({
     *   create: {
     *     // ... data to create a NewsArticle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NewsArticle we want to update
     *   }
     * })
     */
    upsert<T extends NewsArticleUpsertArgs>(args: SelectSubset<T, NewsArticleUpsertArgs<ExtArgs>>): Prisma__NewsArticleClient<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NewsArticles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsArticleCountArgs} args - Arguments to filter NewsArticles to count.
     * @example
     * // Count the number of NewsArticles
     * const count = await prisma.newsArticle.count({
     *   where: {
     *     // ... the filter for the NewsArticles we want to count
     *   }
     * })
    **/
    count<T extends NewsArticleCountArgs>(
      args?: Subset<T, NewsArticleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NewsArticleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NewsArticle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsArticleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NewsArticleAggregateArgs>(args: Subset<T, NewsArticleAggregateArgs>): Prisma.PrismaPromise<GetNewsArticleAggregateType<T>>

    /**
     * Group by NewsArticle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsArticleGroupByArgs} args - Group by arguments.
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
      T extends NewsArticleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NewsArticleGroupByArgs['orderBy'] }
        : { orderBy?: NewsArticleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NewsArticleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNewsArticleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NewsArticle model
   */
  readonly fields: NewsArticleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NewsArticle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NewsArticleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    companies<T extends NewsArticle$companiesArgs<ExtArgs> = {}>(args?: Subset<T, NewsArticle$companiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the NewsArticle model
   */
  interface NewsArticleFieldRefs {
    readonly id: FieldRef<"NewsArticle", 'String'>
    readonly title: FieldRef<"NewsArticle", 'String'>
    readonly url: FieldRef<"NewsArticle", 'String'>
    readonly publishedAt: FieldRef<"NewsArticle", 'DateTime'>
    readonly source: FieldRef<"NewsArticle", 'String'>
    readonly tag: FieldRef<"NewsArticle", 'String'>
    readonly relatedCompanyIds: FieldRef<"NewsArticle", 'String[]'>
    readonly summary: FieldRef<"NewsArticle", 'String'>
  }
    

  // Custom InputTypes
  /**
   * NewsArticle findUnique
   */
  export type NewsArticleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleInclude<ExtArgs> | null
    /**
     * Filter, which NewsArticle to fetch.
     */
    where: NewsArticleWhereUniqueInput
  }

  /**
   * NewsArticle findUniqueOrThrow
   */
  export type NewsArticleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleInclude<ExtArgs> | null
    /**
     * Filter, which NewsArticle to fetch.
     */
    where: NewsArticleWhereUniqueInput
  }

  /**
   * NewsArticle findFirst
   */
  export type NewsArticleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleInclude<ExtArgs> | null
    /**
     * Filter, which NewsArticle to fetch.
     */
    where?: NewsArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsArticles to fetch.
     */
    orderBy?: NewsArticleOrderByWithRelationInput | NewsArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewsArticles.
     */
    cursor?: NewsArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsArticles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsArticles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsArticles.
     */
    distinct?: NewsArticleScalarFieldEnum | NewsArticleScalarFieldEnum[]
  }

  /**
   * NewsArticle findFirstOrThrow
   */
  export type NewsArticleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleInclude<ExtArgs> | null
    /**
     * Filter, which NewsArticle to fetch.
     */
    where?: NewsArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsArticles to fetch.
     */
    orderBy?: NewsArticleOrderByWithRelationInput | NewsArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewsArticles.
     */
    cursor?: NewsArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsArticles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsArticles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsArticles.
     */
    distinct?: NewsArticleScalarFieldEnum | NewsArticleScalarFieldEnum[]
  }

  /**
   * NewsArticle findMany
   */
  export type NewsArticleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleInclude<ExtArgs> | null
    /**
     * Filter, which NewsArticles to fetch.
     */
    where?: NewsArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsArticles to fetch.
     */
    orderBy?: NewsArticleOrderByWithRelationInput | NewsArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NewsArticles.
     */
    cursor?: NewsArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsArticles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsArticles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsArticles.
     */
    distinct?: NewsArticleScalarFieldEnum | NewsArticleScalarFieldEnum[]
  }

  /**
   * NewsArticle create
   */
  export type NewsArticleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleInclude<ExtArgs> | null
    /**
     * The data needed to create a NewsArticle.
     */
    data: XOR<NewsArticleCreateInput, NewsArticleUncheckedCreateInput>
  }

  /**
   * NewsArticle createMany
   */
  export type NewsArticleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NewsArticles.
     */
    data: NewsArticleCreateManyInput | NewsArticleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NewsArticle createManyAndReturn
   */
  export type NewsArticleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * The data used to create many NewsArticles.
     */
    data: NewsArticleCreateManyInput | NewsArticleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NewsArticle update
   */
  export type NewsArticleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleInclude<ExtArgs> | null
    /**
     * The data needed to update a NewsArticle.
     */
    data: XOR<NewsArticleUpdateInput, NewsArticleUncheckedUpdateInput>
    /**
     * Choose, which NewsArticle to update.
     */
    where: NewsArticleWhereUniqueInput
  }

  /**
   * NewsArticle updateMany
   */
  export type NewsArticleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NewsArticles.
     */
    data: XOR<NewsArticleUpdateManyMutationInput, NewsArticleUncheckedUpdateManyInput>
    /**
     * Filter which NewsArticles to update
     */
    where?: NewsArticleWhereInput
    /**
     * Limit how many NewsArticles to update.
     */
    limit?: number
  }

  /**
   * NewsArticle updateManyAndReturn
   */
  export type NewsArticleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * The data used to update NewsArticles.
     */
    data: XOR<NewsArticleUpdateManyMutationInput, NewsArticleUncheckedUpdateManyInput>
    /**
     * Filter which NewsArticles to update
     */
    where?: NewsArticleWhereInput
    /**
     * Limit how many NewsArticles to update.
     */
    limit?: number
  }

  /**
   * NewsArticle upsert
   */
  export type NewsArticleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleInclude<ExtArgs> | null
    /**
     * The filter to search for the NewsArticle to update in case it exists.
     */
    where: NewsArticleWhereUniqueInput
    /**
     * In case the NewsArticle found by the `where` argument doesn't exist, create a new NewsArticle with this data.
     */
    create: XOR<NewsArticleCreateInput, NewsArticleUncheckedCreateInput>
    /**
     * In case the NewsArticle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NewsArticleUpdateInput, NewsArticleUncheckedUpdateInput>
  }

  /**
   * NewsArticle delete
   */
  export type NewsArticleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleInclude<ExtArgs> | null
    /**
     * Filter which NewsArticle to delete.
     */
    where: NewsArticleWhereUniqueInput
  }

  /**
   * NewsArticle deleteMany
   */
  export type NewsArticleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewsArticles to delete
     */
    where?: NewsArticleWhereInput
    /**
     * Limit how many NewsArticles to delete.
     */
    limit?: number
  }

  /**
   * NewsArticle.companies
   */
  export type NewsArticle$companiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    where?: CompanyWhereInput
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    cursor?: CompanyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * NewsArticle without action
   */
  export type NewsArticleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleInclude<ExtArgs> | null
  }


  /**
   * Model Tag
   */

  export type AggregateTag = {
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  export type TagMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    type: $Enums.TagType | null
  }

  export type TagMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    type: $Enums.TagType | null
  }

  export type TagCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    type: number
    _all: number
  }


  export type TagMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    type?: true
  }

  export type TagMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    type?: true
  }

  export type TagCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    type?: true
    _all?: true
  }

  export type TagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tag to aggregate.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tags
    **/
    _count?: true | TagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagMaxAggregateInputType
  }

  export type GetTagAggregateType<T extends TagAggregateArgs> = {
        [P in keyof T & keyof AggregateTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTag[P]>
      : GetScalarType<T[P], AggregateTag[P]>
  }




  export type TagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
    orderBy?: TagOrderByWithAggregationInput | TagOrderByWithAggregationInput[]
    by: TagScalarFieldEnum[] | TagScalarFieldEnum
    having?: TagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagCountAggregateInputType | true
    _min?: TagMinAggregateInputType
    _max?: TagMaxAggregateInputType
  }

  export type TagGroupByOutputType = {
    id: string
    name: string
    slug: string
    type: $Enums.TagType
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  type GetTagGroupByPayload<T extends TagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagGroupByOutputType[P]>
            : GetScalarType<T[P], TagGroupByOutputType[P]>
        }
      >
    >


  export type TagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    type?: boolean
    companies?: boolean | Tag$companiesArgs<ExtArgs>
    products?: boolean | Tag$productsArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>

  export type TagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    type?: boolean
  }, ExtArgs["result"]["tag"]>

  export type TagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    type?: boolean
  }, ExtArgs["result"]["tag"]>

  export type TagSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    type?: boolean
  }

  export type TagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "type", ExtArgs["result"]["tag"]>
  export type TagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    companies?: boolean | Tag$companiesArgs<ExtArgs>
    products?: boolean | Tag$productsArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tag"
    objects: {
      companies: Prisma.$CompanyPayload<ExtArgs>[]
      products: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      type: $Enums.TagType
    }, ExtArgs["result"]["tag"]>
    composites: {}
  }

  type TagGetPayload<S extends boolean | null | undefined | TagDefaultArgs> = $Result.GetResult<Prisma.$TagPayload, S>

  type TagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TagCountAggregateInputType | true
    }

  export interface TagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tag'], meta: { name: 'Tag' } }
    /**
     * Find zero or one Tag that matches the filter.
     * @param {TagFindUniqueArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TagFindUniqueArgs>(args: SelectSubset<T, TagFindUniqueArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TagFindUniqueOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TagFindUniqueOrThrowArgs>(args: SelectSubset<T, TagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TagFindFirstArgs>(args?: SelectSubset<T, TagFindFirstArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TagFindFirstOrThrowArgs>(args?: SelectSubset<T, TagFindFirstOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tag.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagWithIdOnly = await prisma.tag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TagFindManyArgs>(args?: SelectSubset<T, TagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tag.
     * @param {TagCreateArgs} args - Arguments to create a Tag.
     * @example
     * // Create one Tag
     * const Tag = await prisma.tag.create({
     *   data: {
     *     // ... data to create a Tag
     *   }
     * })
     * 
     */
    create<T extends TagCreateArgs>(args: SelectSubset<T, TagCreateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tags.
     * @param {TagCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TagCreateManyArgs>(args?: SelectSubset<T, TagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tags and returns the data saved in the database.
     * @param {TagCreateManyAndReturnArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TagCreateManyAndReturnArgs>(args?: SelectSubset<T, TagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tag.
     * @param {TagDeleteArgs} args - Arguments to delete one Tag.
     * @example
     * // Delete one Tag
     * const Tag = await prisma.tag.delete({
     *   where: {
     *     // ... filter to delete one Tag
     *   }
     * })
     * 
     */
    delete<T extends TagDeleteArgs>(args: SelectSubset<T, TagDeleteArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tag.
     * @param {TagUpdateArgs} args - Arguments to update one Tag.
     * @example
     * // Update one Tag
     * const tag = await prisma.tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TagUpdateArgs>(args: SelectSubset<T, TagUpdateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tags.
     * @param {TagDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TagDeleteManyArgs>(args?: SelectSubset<T, TagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TagUpdateManyArgs>(args: SelectSubset<T, TagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags and returns the data updated in the database.
     * @param {TagUpdateManyAndReturnArgs} args - Arguments to update many Tags.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.updateManyAndReturn({
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
    updateManyAndReturn<T extends TagUpdateManyAndReturnArgs>(args: SelectSubset<T, TagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tag.
     * @param {TagUpsertArgs} args - Arguments to update or create a Tag.
     * @example
     * // Update or create a Tag
     * const tag = await prisma.tag.upsert({
     *   create: {
     *     // ... data to create a Tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tag we want to update
     *   }
     * })
     */
    upsert<T extends TagUpsertArgs>(args: SelectSubset<T, TagUpsertArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tag.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends TagCountArgs>(
      args?: Subset<T, TagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TagAggregateArgs>(args: Subset<T, TagAggregateArgs>): Prisma.PrismaPromise<GetTagAggregateType<T>>

    /**
     * Group by Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagGroupByArgs} args - Group by arguments.
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
      T extends TagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagGroupByArgs['orderBy'] }
        : { orderBy?: TagGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tag model
   */
  readonly fields: TagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    companies<T extends Tag$companiesArgs<ExtArgs> = {}>(args?: Subset<T, Tag$companiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    products<T extends Tag$productsArgs<ExtArgs> = {}>(args?: Subset<T, Tag$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Tag model
   */
  interface TagFieldRefs {
    readonly id: FieldRef<"Tag", 'String'>
    readonly name: FieldRef<"Tag", 'String'>
    readonly slug: FieldRef<"Tag", 'String'>
    readonly type: FieldRef<"Tag", 'TagType'>
  }
    

  // Custom InputTypes
  /**
   * Tag findUnique
   */
  export type TagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findUniqueOrThrow
   */
  export type TagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findFirst
   */
  export type TagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findFirstOrThrow
   */
  export type TagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findMany
   */
  export type TagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag create
   */
  export type TagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to create a Tag.
     */
    data: XOR<TagCreateInput, TagUncheckedCreateInput>
  }

  /**
   * Tag createMany
   */
  export type TagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag createManyAndReturn
   */
  export type TagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag update
   */
  export type TagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to update a Tag.
     */
    data: XOR<TagUpdateInput, TagUncheckedUpdateInput>
    /**
     * Choose, which Tag to update.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag updateMany
   */
  export type TagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag updateManyAndReturn
   */
  export type TagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag upsert
   */
  export type TagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The filter to search for the Tag to update in case it exists.
     */
    where: TagWhereUniqueInput
    /**
     * In case the Tag found by the `where` argument doesn't exist, create a new Tag with this data.
     */
    create: XOR<TagCreateInput, TagUncheckedCreateInput>
    /**
     * In case the Tag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagUpdateInput, TagUncheckedUpdateInput>
  }

  /**
   * Tag delete
   */
  export type TagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter which Tag to delete.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag deleteMany
   */
  export type TagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tags to delete
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to delete.
     */
    limit?: number
  }

  /**
   * Tag.companies
   */
  export type Tag$companiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    where?: CompanyWhereInput
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    cursor?: CompanyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Tag.products
   */
  export type Tag$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Tag without action
   */
  export type TagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
  }


  /**
   * Model CompanyRelationship
   */

  export type AggregateCompanyRelationship = {
    _count: CompanyRelationshipCountAggregateOutputType | null
    _min: CompanyRelationshipMinAggregateOutputType | null
    _max: CompanyRelationshipMaxAggregateOutputType | null
  }

  export type CompanyRelationshipMinAggregateOutputType = {
    id: string | null
    sourceCompanyId: string | null
    targetCompanyId: string | null
    relationshipType: $Enums.RelationshipType | null
  }

  export type CompanyRelationshipMaxAggregateOutputType = {
    id: string | null
    sourceCompanyId: string | null
    targetCompanyId: string | null
    relationshipType: $Enums.RelationshipType | null
  }

  export type CompanyRelationshipCountAggregateOutputType = {
    id: number
    sourceCompanyId: number
    targetCompanyId: number
    relationshipType: number
    _all: number
  }


  export type CompanyRelationshipMinAggregateInputType = {
    id?: true
    sourceCompanyId?: true
    targetCompanyId?: true
    relationshipType?: true
  }

  export type CompanyRelationshipMaxAggregateInputType = {
    id?: true
    sourceCompanyId?: true
    targetCompanyId?: true
    relationshipType?: true
  }

  export type CompanyRelationshipCountAggregateInputType = {
    id?: true
    sourceCompanyId?: true
    targetCompanyId?: true
    relationshipType?: true
    _all?: true
  }

  export type CompanyRelationshipAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompanyRelationship to aggregate.
     */
    where?: CompanyRelationshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyRelationships to fetch.
     */
    orderBy?: CompanyRelationshipOrderByWithRelationInput | CompanyRelationshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanyRelationshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyRelationships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyRelationships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CompanyRelationships
    **/
    _count?: true | CompanyRelationshipCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyRelationshipMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyRelationshipMaxAggregateInputType
  }

  export type GetCompanyRelationshipAggregateType<T extends CompanyRelationshipAggregateArgs> = {
        [P in keyof T & keyof AggregateCompanyRelationship]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompanyRelationship[P]>
      : GetScalarType<T[P], AggregateCompanyRelationship[P]>
  }




  export type CompanyRelationshipGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyRelationshipWhereInput
    orderBy?: CompanyRelationshipOrderByWithAggregationInput | CompanyRelationshipOrderByWithAggregationInput[]
    by: CompanyRelationshipScalarFieldEnum[] | CompanyRelationshipScalarFieldEnum
    having?: CompanyRelationshipScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyRelationshipCountAggregateInputType | true
    _min?: CompanyRelationshipMinAggregateInputType
    _max?: CompanyRelationshipMaxAggregateInputType
  }

  export type CompanyRelationshipGroupByOutputType = {
    id: string
    sourceCompanyId: string
    targetCompanyId: string
    relationshipType: $Enums.RelationshipType
    _count: CompanyRelationshipCountAggregateOutputType | null
    _min: CompanyRelationshipMinAggregateOutputType | null
    _max: CompanyRelationshipMaxAggregateOutputType | null
  }

  type GetCompanyRelationshipGroupByPayload<T extends CompanyRelationshipGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyRelationshipGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyRelationshipGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyRelationshipGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyRelationshipGroupByOutputType[P]>
        }
      >
    >


  export type CompanyRelationshipSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sourceCompanyId?: boolean
    targetCompanyId?: boolean
    relationshipType?: boolean
    sourceCompany?: boolean | CompanyDefaultArgs<ExtArgs>
    targetCompany?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["companyRelationship"]>

  export type CompanyRelationshipSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sourceCompanyId?: boolean
    targetCompanyId?: boolean
    relationshipType?: boolean
    sourceCompany?: boolean | CompanyDefaultArgs<ExtArgs>
    targetCompany?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["companyRelationship"]>

  export type CompanyRelationshipSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sourceCompanyId?: boolean
    targetCompanyId?: boolean
    relationshipType?: boolean
    sourceCompany?: boolean | CompanyDefaultArgs<ExtArgs>
    targetCompany?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["companyRelationship"]>

  export type CompanyRelationshipSelectScalar = {
    id?: boolean
    sourceCompanyId?: boolean
    targetCompanyId?: boolean
    relationshipType?: boolean
  }

  export type CompanyRelationshipOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sourceCompanyId" | "targetCompanyId" | "relationshipType", ExtArgs["result"]["companyRelationship"]>
  export type CompanyRelationshipInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sourceCompany?: boolean | CompanyDefaultArgs<ExtArgs>
    targetCompany?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type CompanyRelationshipIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sourceCompany?: boolean | CompanyDefaultArgs<ExtArgs>
    targetCompany?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type CompanyRelationshipIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sourceCompany?: boolean | CompanyDefaultArgs<ExtArgs>
    targetCompany?: boolean | CompanyDefaultArgs<ExtArgs>
  }

  export type $CompanyRelationshipPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CompanyRelationship"
    objects: {
      sourceCompany: Prisma.$CompanyPayload<ExtArgs>
      targetCompany: Prisma.$CompanyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sourceCompanyId: string
      targetCompanyId: string
      relationshipType: $Enums.RelationshipType
    }, ExtArgs["result"]["companyRelationship"]>
    composites: {}
  }

  type CompanyRelationshipGetPayload<S extends boolean | null | undefined | CompanyRelationshipDefaultArgs> = $Result.GetResult<Prisma.$CompanyRelationshipPayload, S>

  type CompanyRelationshipCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompanyRelationshipFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompanyRelationshipCountAggregateInputType | true
    }

  export interface CompanyRelationshipDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CompanyRelationship'], meta: { name: 'CompanyRelationship' } }
    /**
     * Find zero or one CompanyRelationship that matches the filter.
     * @param {CompanyRelationshipFindUniqueArgs} args - Arguments to find a CompanyRelationship
     * @example
     * // Get one CompanyRelationship
     * const companyRelationship = await prisma.companyRelationship.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompanyRelationshipFindUniqueArgs>(args: SelectSubset<T, CompanyRelationshipFindUniqueArgs<ExtArgs>>): Prisma__CompanyRelationshipClient<$Result.GetResult<Prisma.$CompanyRelationshipPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CompanyRelationship that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompanyRelationshipFindUniqueOrThrowArgs} args - Arguments to find a CompanyRelationship
     * @example
     * // Get one CompanyRelationship
     * const companyRelationship = await prisma.companyRelationship.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompanyRelationshipFindUniqueOrThrowArgs>(args: SelectSubset<T, CompanyRelationshipFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompanyRelationshipClient<$Result.GetResult<Prisma.$CompanyRelationshipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompanyRelationship that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyRelationshipFindFirstArgs} args - Arguments to find a CompanyRelationship
     * @example
     * // Get one CompanyRelationship
     * const companyRelationship = await prisma.companyRelationship.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompanyRelationshipFindFirstArgs>(args?: SelectSubset<T, CompanyRelationshipFindFirstArgs<ExtArgs>>): Prisma__CompanyRelationshipClient<$Result.GetResult<Prisma.$CompanyRelationshipPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompanyRelationship that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyRelationshipFindFirstOrThrowArgs} args - Arguments to find a CompanyRelationship
     * @example
     * // Get one CompanyRelationship
     * const companyRelationship = await prisma.companyRelationship.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompanyRelationshipFindFirstOrThrowArgs>(args?: SelectSubset<T, CompanyRelationshipFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompanyRelationshipClient<$Result.GetResult<Prisma.$CompanyRelationshipPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CompanyRelationships that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyRelationshipFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CompanyRelationships
     * const companyRelationships = await prisma.companyRelationship.findMany()
     * 
     * // Get first 10 CompanyRelationships
     * const companyRelationships = await prisma.companyRelationship.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyRelationshipWithIdOnly = await prisma.companyRelationship.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompanyRelationshipFindManyArgs>(args?: SelectSubset<T, CompanyRelationshipFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyRelationshipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CompanyRelationship.
     * @param {CompanyRelationshipCreateArgs} args - Arguments to create a CompanyRelationship.
     * @example
     * // Create one CompanyRelationship
     * const CompanyRelationship = await prisma.companyRelationship.create({
     *   data: {
     *     // ... data to create a CompanyRelationship
     *   }
     * })
     * 
     */
    create<T extends CompanyRelationshipCreateArgs>(args: SelectSubset<T, CompanyRelationshipCreateArgs<ExtArgs>>): Prisma__CompanyRelationshipClient<$Result.GetResult<Prisma.$CompanyRelationshipPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CompanyRelationships.
     * @param {CompanyRelationshipCreateManyArgs} args - Arguments to create many CompanyRelationships.
     * @example
     * // Create many CompanyRelationships
     * const companyRelationship = await prisma.companyRelationship.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompanyRelationshipCreateManyArgs>(args?: SelectSubset<T, CompanyRelationshipCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CompanyRelationships and returns the data saved in the database.
     * @param {CompanyRelationshipCreateManyAndReturnArgs} args - Arguments to create many CompanyRelationships.
     * @example
     * // Create many CompanyRelationships
     * const companyRelationship = await prisma.companyRelationship.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CompanyRelationships and only return the `id`
     * const companyRelationshipWithIdOnly = await prisma.companyRelationship.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompanyRelationshipCreateManyAndReturnArgs>(args?: SelectSubset<T, CompanyRelationshipCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyRelationshipPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CompanyRelationship.
     * @param {CompanyRelationshipDeleteArgs} args - Arguments to delete one CompanyRelationship.
     * @example
     * // Delete one CompanyRelationship
     * const CompanyRelationship = await prisma.companyRelationship.delete({
     *   where: {
     *     // ... filter to delete one CompanyRelationship
     *   }
     * })
     * 
     */
    delete<T extends CompanyRelationshipDeleteArgs>(args: SelectSubset<T, CompanyRelationshipDeleteArgs<ExtArgs>>): Prisma__CompanyRelationshipClient<$Result.GetResult<Prisma.$CompanyRelationshipPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CompanyRelationship.
     * @param {CompanyRelationshipUpdateArgs} args - Arguments to update one CompanyRelationship.
     * @example
     * // Update one CompanyRelationship
     * const companyRelationship = await prisma.companyRelationship.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompanyRelationshipUpdateArgs>(args: SelectSubset<T, CompanyRelationshipUpdateArgs<ExtArgs>>): Prisma__CompanyRelationshipClient<$Result.GetResult<Prisma.$CompanyRelationshipPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CompanyRelationships.
     * @param {CompanyRelationshipDeleteManyArgs} args - Arguments to filter CompanyRelationships to delete.
     * @example
     * // Delete a few CompanyRelationships
     * const { count } = await prisma.companyRelationship.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompanyRelationshipDeleteManyArgs>(args?: SelectSubset<T, CompanyRelationshipDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompanyRelationships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyRelationshipUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CompanyRelationships
     * const companyRelationship = await prisma.companyRelationship.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompanyRelationshipUpdateManyArgs>(args: SelectSubset<T, CompanyRelationshipUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompanyRelationships and returns the data updated in the database.
     * @param {CompanyRelationshipUpdateManyAndReturnArgs} args - Arguments to update many CompanyRelationships.
     * @example
     * // Update many CompanyRelationships
     * const companyRelationship = await prisma.companyRelationship.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CompanyRelationships and only return the `id`
     * const companyRelationshipWithIdOnly = await prisma.companyRelationship.updateManyAndReturn({
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
    updateManyAndReturn<T extends CompanyRelationshipUpdateManyAndReturnArgs>(args: SelectSubset<T, CompanyRelationshipUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyRelationshipPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CompanyRelationship.
     * @param {CompanyRelationshipUpsertArgs} args - Arguments to update or create a CompanyRelationship.
     * @example
     * // Update or create a CompanyRelationship
     * const companyRelationship = await prisma.companyRelationship.upsert({
     *   create: {
     *     // ... data to create a CompanyRelationship
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CompanyRelationship we want to update
     *   }
     * })
     */
    upsert<T extends CompanyRelationshipUpsertArgs>(args: SelectSubset<T, CompanyRelationshipUpsertArgs<ExtArgs>>): Prisma__CompanyRelationshipClient<$Result.GetResult<Prisma.$CompanyRelationshipPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CompanyRelationships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyRelationshipCountArgs} args - Arguments to filter CompanyRelationships to count.
     * @example
     * // Count the number of CompanyRelationships
     * const count = await prisma.companyRelationship.count({
     *   where: {
     *     // ... the filter for the CompanyRelationships we want to count
     *   }
     * })
    **/
    count<T extends CompanyRelationshipCountArgs>(
      args?: Subset<T, CompanyRelationshipCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyRelationshipCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CompanyRelationship.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyRelationshipAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompanyRelationshipAggregateArgs>(args: Subset<T, CompanyRelationshipAggregateArgs>): Prisma.PrismaPromise<GetCompanyRelationshipAggregateType<T>>

    /**
     * Group by CompanyRelationship.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyRelationshipGroupByArgs} args - Group by arguments.
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
      T extends CompanyRelationshipGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyRelationshipGroupByArgs['orderBy'] }
        : { orderBy?: CompanyRelationshipGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CompanyRelationshipGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyRelationshipGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CompanyRelationship model
   */
  readonly fields: CompanyRelationshipFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CompanyRelationship.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanyRelationshipClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sourceCompany<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    targetCompany<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CompanyRelationship model
   */
  interface CompanyRelationshipFieldRefs {
    readonly id: FieldRef<"CompanyRelationship", 'String'>
    readonly sourceCompanyId: FieldRef<"CompanyRelationship", 'String'>
    readonly targetCompanyId: FieldRef<"CompanyRelationship", 'String'>
    readonly relationshipType: FieldRef<"CompanyRelationship", 'RelationshipType'>
  }
    

  // Custom InputTypes
  /**
   * CompanyRelationship findUnique
   */
  export type CompanyRelationshipFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyRelationship
     */
    select?: CompanyRelationshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyRelationship
     */
    omit?: CompanyRelationshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyRelationshipInclude<ExtArgs> | null
    /**
     * Filter, which CompanyRelationship to fetch.
     */
    where: CompanyRelationshipWhereUniqueInput
  }

  /**
   * CompanyRelationship findUniqueOrThrow
   */
  export type CompanyRelationshipFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyRelationship
     */
    select?: CompanyRelationshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyRelationship
     */
    omit?: CompanyRelationshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyRelationshipInclude<ExtArgs> | null
    /**
     * Filter, which CompanyRelationship to fetch.
     */
    where: CompanyRelationshipWhereUniqueInput
  }

  /**
   * CompanyRelationship findFirst
   */
  export type CompanyRelationshipFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyRelationship
     */
    select?: CompanyRelationshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyRelationship
     */
    omit?: CompanyRelationshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyRelationshipInclude<ExtArgs> | null
    /**
     * Filter, which CompanyRelationship to fetch.
     */
    where?: CompanyRelationshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyRelationships to fetch.
     */
    orderBy?: CompanyRelationshipOrderByWithRelationInput | CompanyRelationshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompanyRelationships.
     */
    cursor?: CompanyRelationshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyRelationships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyRelationships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompanyRelationships.
     */
    distinct?: CompanyRelationshipScalarFieldEnum | CompanyRelationshipScalarFieldEnum[]
  }

  /**
   * CompanyRelationship findFirstOrThrow
   */
  export type CompanyRelationshipFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyRelationship
     */
    select?: CompanyRelationshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyRelationship
     */
    omit?: CompanyRelationshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyRelationshipInclude<ExtArgs> | null
    /**
     * Filter, which CompanyRelationship to fetch.
     */
    where?: CompanyRelationshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyRelationships to fetch.
     */
    orderBy?: CompanyRelationshipOrderByWithRelationInput | CompanyRelationshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompanyRelationships.
     */
    cursor?: CompanyRelationshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyRelationships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyRelationships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompanyRelationships.
     */
    distinct?: CompanyRelationshipScalarFieldEnum | CompanyRelationshipScalarFieldEnum[]
  }

  /**
   * CompanyRelationship findMany
   */
  export type CompanyRelationshipFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyRelationship
     */
    select?: CompanyRelationshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyRelationship
     */
    omit?: CompanyRelationshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyRelationshipInclude<ExtArgs> | null
    /**
     * Filter, which CompanyRelationships to fetch.
     */
    where?: CompanyRelationshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyRelationships to fetch.
     */
    orderBy?: CompanyRelationshipOrderByWithRelationInput | CompanyRelationshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CompanyRelationships.
     */
    cursor?: CompanyRelationshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyRelationships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyRelationships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompanyRelationships.
     */
    distinct?: CompanyRelationshipScalarFieldEnum | CompanyRelationshipScalarFieldEnum[]
  }

  /**
   * CompanyRelationship create
   */
  export type CompanyRelationshipCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyRelationship
     */
    select?: CompanyRelationshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyRelationship
     */
    omit?: CompanyRelationshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyRelationshipInclude<ExtArgs> | null
    /**
     * The data needed to create a CompanyRelationship.
     */
    data: XOR<CompanyRelationshipCreateInput, CompanyRelationshipUncheckedCreateInput>
  }

  /**
   * CompanyRelationship createMany
   */
  export type CompanyRelationshipCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CompanyRelationships.
     */
    data: CompanyRelationshipCreateManyInput | CompanyRelationshipCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CompanyRelationship createManyAndReturn
   */
  export type CompanyRelationshipCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyRelationship
     */
    select?: CompanyRelationshipSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyRelationship
     */
    omit?: CompanyRelationshipOmit<ExtArgs> | null
    /**
     * The data used to create many CompanyRelationships.
     */
    data: CompanyRelationshipCreateManyInput | CompanyRelationshipCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyRelationshipIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CompanyRelationship update
   */
  export type CompanyRelationshipUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyRelationship
     */
    select?: CompanyRelationshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyRelationship
     */
    omit?: CompanyRelationshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyRelationshipInclude<ExtArgs> | null
    /**
     * The data needed to update a CompanyRelationship.
     */
    data: XOR<CompanyRelationshipUpdateInput, CompanyRelationshipUncheckedUpdateInput>
    /**
     * Choose, which CompanyRelationship to update.
     */
    where: CompanyRelationshipWhereUniqueInput
  }

  /**
   * CompanyRelationship updateMany
   */
  export type CompanyRelationshipUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CompanyRelationships.
     */
    data: XOR<CompanyRelationshipUpdateManyMutationInput, CompanyRelationshipUncheckedUpdateManyInput>
    /**
     * Filter which CompanyRelationships to update
     */
    where?: CompanyRelationshipWhereInput
    /**
     * Limit how many CompanyRelationships to update.
     */
    limit?: number
  }

  /**
   * CompanyRelationship updateManyAndReturn
   */
  export type CompanyRelationshipUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyRelationship
     */
    select?: CompanyRelationshipSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyRelationship
     */
    omit?: CompanyRelationshipOmit<ExtArgs> | null
    /**
     * The data used to update CompanyRelationships.
     */
    data: XOR<CompanyRelationshipUpdateManyMutationInput, CompanyRelationshipUncheckedUpdateManyInput>
    /**
     * Filter which CompanyRelationships to update
     */
    where?: CompanyRelationshipWhereInput
    /**
     * Limit how many CompanyRelationships to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyRelationshipIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CompanyRelationship upsert
   */
  export type CompanyRelationshipUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyRelationship
     */
    select?: CompanyRelationshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyRelationship
     */
    omit?: CompanyRelationshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyRelationshipInclude<ExtArgs> | null
    /**
     * The filter to search for the CompanyRelationship to update in case it exists.
     */
    where: CompanyRelationshipWhereUniqueInput
    /**
     * In case the CompanyRelationship found by the `where` argument doesn't exist, create a new CompanyRelationship with this data.
     */
    create: XOR<CompanyRelationshipCreateInput, CompanyRelationshipUncheckedCreateInput>
    /**
     * In case the CompanyRelationship was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanyRelationshipUpdateInput, CompanyRelationshipUncheckedUpdateInput>
  }

  /**
   * CompanyRelationship delete
   */
  export type CompanyRelationshipDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyRelationship
     */
    select?: CompanyRelationshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyRelationship
     */
    omit?: CompanyRelationshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyRelationshipInclude<ExtArgs> | null
    /**
     * Filter which CompanyRelationship to delete.
     */
    where: CompanyRelationshipWhereUniqueInput
  }

  /**
   * CompanyRelationship deleteMany
   */
  export type CompanyRelationshipDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompanyRelationships to delete
     */
    where?: CompanyRelationshipWhereInput
    /**
     * Limit how many CompanyRelationships to delete.
     */
    limit?: number
  }

  /**
   * CompanyRelationship without action
   */
  export type CompanyRelationshipDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyRelationship
     */
    select?: CompanyRelationshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyRelationship
     */
    omit?: CompanyRelationshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyRelationshipInclude<ExtArgs> | null
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


  export const CompanyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    description: 'description',
    category: 'category',
    fundingTotal: 'fundingTotal',
    employeeCount: 'employeeCount',
    foundedYear: 'foundedYear',
    hqCity: 'hqCity',
    hqCountry: 'hqCountry',
    logoUrl: 'logoUrl',
    website: 'website',
    stage: 'stage',
    isUnicorn: 'isUnicorn',
    valuation: 'valuation',
    growthScore: 'growthScore',
    lastScrapedAt: 'lastScrapedAt',
    dataConfidenceScore: 'dataConfidenceScore',
    claimedBy: 'claimedBy',
    claimedAt: 'claimedAt'
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum]


  export const InvestorScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    type: 'type',
    bio: 'bio',
    aum: 'aum',
    portfolioCount: 'portfolioCount',
    stageFocus: 'stageFocus',
    sectorFocus: 'sectorFocus',
    location: 'location',
    logoUrl: 'logoUrl',
    avgCheckSize: 'avgCheckSize',
    fundNumber: 'fundNumber'
  };

  export type InvestorScalarFieldEnum = (typeof InvestorScalarFieldEnum)[keyof typeof InvestorScalarFieldEnum]


  export const FounderScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    title: 'title',
    companyId: 'companyId',
    bio: 'bio',
    twitter: 'twitter',
    linkedin: 'linkedin',
    location: 'location',
    photoUrl: 'photoUrl'
  };

  export type FounderScalarFieldEnum = (typeof FounderScalarFieldEnum)[keyof typeof FounderScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    companyId: 'companyId',
    name: 'name',
    slug: 'slug',
    description: 'description',
    category: 'category',
    launchDate: 'launchDate',
    upvotes: 'upvotes',
    websiteUrl: 'websiteUrl'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const FundingRoundScalarFieldEnum: {
    id: 'id',
    companyId: 'companyId',
    roundType: 'roundType',
    amount: 'amount',
    currency: 'currency',
    date: 'date',
    leadInvestorId: 'leadInvestorId',
    coInvestors: 'coInvestors'
  };

  export type FundingRoundScalarFieldEnum = (typeof FundingRoundScalarFieldEnum)[keyof typeof FundingRoundScalarFieldEnum]


  export const NewsArticleScalarFieldEnum: {
    id: 'id',
    title: 'title',
    url: 'url',
    publishedAt: 'publishedAt',
    source: 'source',
    tag: 'tag',
    relatedCompanyIds: 'relatedCompanyIds',
    summary: 'summary'
  };

  export type NewsArticleScalarFieldEnum = (typeof NewsArticleScalarFieldEnum)[keyof typeof NewsArticleScalarFieldEnum]


  export const TagScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    type: 'type'
  };

  export type TagScalarFieldEnum = (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum]


  export const CompanyRelationshipScalarFieldEnum: {
    id: 'id',
    sourceCompanyId: 'sourceCompanyId',
    targetCompanyId: 'targetCompanyId',
    relationshipType: 'relationshipType'
  };

  export type CompanyRelationshipScalarFieldEnum = (typeof CompanyRelationshipScalarFieldEnum)[keyof typeof CompanyRelationshipScalarFieldEnum]


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
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'TagType'
   */
  export type EnumTagTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TagType'>
    


  /**
   * Reference to a field of type 'TagType[]'
   */
  export type ListEnumTagTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TagType[]'>
    


  /**
   * Reference to a field of type 'RelationshipType'
   */
  export type EnumRelationshipTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RelationshipType'>
    


  /**
   * Reference to a field of type 'RelationshipType[]'
   */
  export type ListEnumRelationshipTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RelationshipType[]'>
    
  /**
   * Deep Input Types
   */


  export type CompanyWhereInput = {
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    id?: StringFilter<"Company"> | string
    name?: StringFilter<"Company"> | string
    slug?: StringFilter<"Company"> | string
    description?: StringNullableFilter<"Company"> | string | null
    category?: StringFilter<"Company"> | string
    fundingTotal?: BigIntNullableFilter<"Company"> | bigint | number | null
    employeeCount?: IntNullableFilter<"Company"> | number | null
    foundedYear?: IntNullableFilter<"Company"> | number | null
    hqCity?: StringNullableFilter<"Company"> | string | null
    hqCountry?: StringNullableFilter<"Company"> | string | null
    logoUrl?: StringNullableFilter<"Company"> | string | null
    website?: StringNullableFilter<"Company"> | string | null
    stage?: StringNullableFilter<"Company"> | string | null
    isUnicorn?: BoolNullableFilter<"Company"> | boolean | null
    valuation?: BigIntNullableFilter<"Company"> | bigint | number | null
    growthScore?: FloatNullableFilter<"Company"> | number | null
    lastScrapedAt?: DateTimeNullableFilter<"Company"> | Date | string | null
    dataConfidenceScore?: FloatNullableFilter<"Company"> | number | null
    claimedBy?: StringNullableFilter<"Company"> | string | null
    claimedAt?: DateTimeNullableFilter<"Company"> | Date | string | null
    founders?: FounderListRelationFilter
    products?: ProductListRelationFilter
    fundingRounds?: FundingRoundListRelationFilter
    relatedFrom?: CompanyRelationshipListRelationFilter
    relatedTo?: CompanyRelationshipListRelationFilter
    newsArticles?: NewsArticleListRelationFilter
    tags?: TagListRelationFilter
  }

  export type CompanyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    category?: SortOrder
    fundingTotal?: SortOrderInput | SortOrder
    employeeCount?: SortOrderInput | SortOrder
    foundedYear?: SortOrderInput | SortOrder
    hqCity?: SortOrderInput | SortOrder
    hqCountry?: SortOrderInput | SortOrder
    logoUrl?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    stage?: SortOrderInput | SortOrder
    isUnicorn?: SortOrderInput | SortOrder
    valuation?: SortOrderInput | SortOrder
    growthScore?: SortOrderInput | SortOrder
    lastScrapedAt?: SortOrderInput | SortOrder
    dataConfidenceScore?: SortOrderInput | SortOrder
    claimedBy?: SortOrderInput | SortOrder
    claimedAt?: SortOrderInput | SortOrder
    founders?: FounderOrderByRelationAggregateInput
    products?: ProductOrderByRelationAggregateInput
    fundingRounds?: FundingRoundOrderByRelationAggregateInput
    relatedFrom?: CompanyRelationshipOrderByRelationAggregateInput
    relatedTo?: CompanyRelationshipOrderByRelationAggregateInput
    newsArticles?: NewsArticleOrderByRelationAggregateInput
    tags?: TagOrderByRelationAggregateInput
  }

  export type CompanyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    name?: StringFilter<"Company"> | string
    description?: StringNullableFilter<"Company"> | string | null
    category?: StringFilter<"Company"> | string
    fundingTotal?: BigIntNullableFilter<"Company"> | bigint | number | null
    employeeCount?: IntNullableFilter<"Company"> | number | null
    foundedYear?: IntNullableFilter<"Company"> | number | null
    hqCity?: StringNullableFilter<"Company"> | string | null
    hqCountry?: StringNullableFilter<"Company"> | string | null
    logoUrl?: StringNullableFilter<"Company"> | string | null
    website?: StringNullableFilter<"Company"> | string | null
    stage?: StringNullableFilter<"Company"> | string | null
    isUnicorn?: BoolNullableFilter<"Company"> | boolean | null
    valuation?: BigIntNullableFilter<"Company"> | bigint | number | null
    growthScore?: FloatNullableFilter<"Company"> | number | null
    lastScrapedAt?: DateTimeNullableFilter<"Company"> | Date | string | null
    dataConfidenceScore?: FloatNullableFilter<"Company"> | number | null
    claimedBy?: StringNullableFilter<"Company"> | string | null
    claimedAt?: DateTimeNullableFilter<"Company"> | Date | string | null
    founders?: FounderListRelationFilter
    products?: ProductListRelationFilter
    fundingRounds?: FundingRoundListRelationFilter
    relatedFrom?: CompanyRelationshipListRelationFilter
    relatedTo?: CompanyRelationshipListRelationFilter
    newsArticles?: NewsArticleListRelationFilter
    tags?: TagListRelationFilter
  }, "id" | "slug">

  export type CompanyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    category?: SortOrder
    fundingTotal?: SortOrderInput | SortOrder
    employeeCount?: SortOrderInput | SortOrder
    foundedYear?: SortOrderInput | SortOrder
    hqCity?: SortOrderInput | SortOrder
    hqCountry?: SortOrderInput | SortOrder
    logoUrl?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    stage?: SortOrderInput | SortOrder
    isUnicorn?: SortOrderInput | SortOrder
    valuation?: SortOrderInput | SortOrder
    growthScore?: SortOrderInput | SortOrder
    lastScrapedAt?: SortOrderInput | SortOrder
    dataConfidenceScore?: SortOrderInput | SortOrder
    claimedBy?: SortOrderInput | SortOrder
    claimedAt?: SortOrderInput | SortOrder
    _count?: CompanyCountOrderByAggregateInput
    _avg?: CompanyAvgOrderByAggregateInput
    _max?: CompanyMaxOrderByAggregateInput
    _min?: CompanyMinOrderByAggregateInput
    _sum?: CompanySumOrderByAggregateInput
  }

  export type CompanyScalarWhereWithAggregatesInput = {
    AND?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    OR?: CompanyScalarWhereWithAggregatesInput[]
    NOT?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Company"> | string
    name?: StringWithAggregatesFilter<"Company"> | string
    slug?: StringWithAggregatesFilter<"Company"> | string
    description?: StringNullableWithAggregatesFilter<"Company"> | string | null
    category?: StringWithAggregatesFilter<"Company"> | string
    fundingTotal?: BigIntNullableWithAggregatesFilter<"Company"> | bigint | number | null
    employeeCount?: IntNullableWithAggregatesFilter<"Company"> | number | null
    foundedYear?: IntNullableWithAggregatesFilter<"Company"> | number | null
    hqCity?: StringNullableWithAggregatesFilter<"Company"> | string | null
    hqCountry?: StringNullableWithAggregatesFilter<"Company"> | string | null
    logoUrl?: StringNullableWithAggregatesFilter<"Company"> | string | null
    website?: StringNullableWithAggregatesFilter<"Company"> | string | null
    stage?: StringNullableWithAggregatesFilter<"Company"> | string | null
    isUnicorn?: BoolNullableWithAggregatesFilter<"Company"> | boolean | null
    valuation?: BigIntNullableWithAggregatesFilter<"Company"> | bigint | number | null
    growthScore?: FloatNullableWithAggregatesFilter<"Company"> | number | null
    lastScrapedAt?: DateTimeNullableWithAggregatesFilter<"Company"> | Date | string | null
    dataConfidenceScore?: FloatNullableWithAggregatesFilter<"Company"> | number | null
    claimedBy?: StringNullableWithAggregatesFilter<"Company"> | string | null
    claimedAt?: DateTimeNullableWithAggregatesFilter<"Company"> | Date | string | null
  }

  export type InvestorWhereInput = {
    AND?: InvestorWhereInput | InvestorWhereInput[]
    OR?: InvestorWhereInput[]
    NOT?: InvestorWhereInput | InvestorWhereInput[]
    id?: StringFilter<"Investor"> | string
    name?: StringFilter<"Investor"> | string
    slug?: StringFilter<"Investor"> | string
    type?: StringNullableFilter<"Investor"> | string | null
    bio?: StringNullableFilter<"Investor"> | string | null
    aum?: BigIntNullableFilter<"Investor"> | bigint | number | null
    portfolioCount?: IntNullableFilter<"Investor"> | number | null
    stageFocus?: StringNullableListFilter<"Investor">
    sectorFocus?: StringNullableListFilter<"Investor">
    location?: StringNullableFilter<"Investor"> | string | null
    logoUrl?: StringNullableFilter<"Investor"> | string | null
    avgCheckSize?: BigIntNullableFilter<"Investor"> | bigint | number | null
    fundNumber?: IntNullableFilter<"Investor"> | number | null
    leadRounds?: FundingRoundListRelationFilter
  }

  export type InvestorOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    type?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    aum?: SortOrderInput | SortOrder
    portfolioCount?: SortOrderInput | SortOrder
    stageFocus?: SortOrder
    sectorFocus?: SortOrder
    location?: SortOrderInput | SortOrder
    logoUrl?: SortOrderInput | SortOrder
    avgCheckSize?: SortOrderInput | SortOrder
    fundNumber?: SortOrderInput | SortOrder
    leadRounds?: FundingRoundOrderByRelationAggregateInput
  }

  export type InvestorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: InvestorWhereInput | InvestorWhereInput[]
    OR?: InvestorWhereInput[]
    NOT?: InvestorWhereInput | InvestorWhereInput[]
    name?: StringFilter<"Investor"> | string
    type?: StringNullableFilter<"Investor"> | string | null
    bio?: StringNullableFilter<"Investor"> | string | null
    aum?: BigIntNullableFilter<"Investor"> | bigint | number | null
    portfolioCount?: IntNullableFilter<"Investor"> | number | null
    stageFocus?: StringNullableListFilter<"Investor">
    sectorFocus?: StringNullableListFilter<"Investor">
    location?: StringNullableFilter<"Investor"> | string | null
    logoUrl?: StringNullableFilter<"Investor"> | string | null
    avgCheckSize?: BigIntNullableFilter<"Investor"> | bigint | number | null
    fundNumber?: IntNullableFilter<"Investor"> | number | null
    leadRounds?: FundingRoundListRelationFilter
  }, "id" | "slug">

  export type InvestorOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    type?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    aum?: SortOrderInput | SortOrder
    portfolioCount?: SortOrderInput | SortOrder
    stageFocus?: SortOrder
    sectorFocus?: SortOrder
    location?: SortOrderInput | SortOrder
    logoUrl?: SortOrderInput | SortOrder
    avgCheckSize?: SortOrderInput | SortOrder
    fundNumber?: SortOrderInput | SortOrder
    _count?: InvestorCountOrderByAggregateInput
    _avg?: InvestorAvgOrderByAggregateInput
    _max?: InvestorMaxOrderByAggregateInput
    _min?: InvestorMinOrderByAggregateInput
    _sum?: InvestorSumOrderByAggregateInput
  }

  export type InvestorScalarWhereWithAggregatesInput = {
    AND?: InvestorScalarWhereWithAggregatesInput | InvestorScalarWhereWithAggregatesInput[]
    OR?: InvestorScalarWhereWithAggregatesInput[]
    NOT?: InvestorScalarWhereWithAggregatesInput | InvestorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Investor"> | string
    name?: StringWithAggregatesFilter<"Investor"> | string
    slug?: StringWithAggregatesFilter<"Investor"> | string
    type?: StringNullableWithAggregatesFilter<"Investor"> | string | null
    bio?: StringNullableWithAggregatesFilter<"Investor"> | string | null
    aum?: BigIntNullableWithAggregatesFilter<"Investor"> | bigint | number | null
    portfolioCount?: IntNullableWithAggregatesFilter<"Investor"> | number | null
    stageFocus?: StringNullableListFilter<"Investor">
    sectorFocus?: StringNullableListFilter<"Investor">
    location?: StringNullableWithAggregatesFilter<"Investor"> | string | null
    logoUrl?: StringNullableWithAggregatesFilter<"Investor"> | string | null
    avgCheckSize?: BigIntNullableWithAggregatesFilter<"Investor"> | bigint | number | null
    fundNumber?: IntNullableWithAggregatesFilter<"Investor"> | number | null
  }

  export type FounderWhereInput = {
    AND?: FounderWhereInput | FounderWhereInput[]
    OR?: FounderWhereInput[]
    NOT?: FounderWhereInput | FounderWhereInput[]
    id?: StringFilter<"Founder"> | string
    name?: StringFilter<"Founder"> | string
    slug?: StringFilter<"Founder"> | string
    title?: StringNullableFilter<"Founder"> | string | null
    companyId?: StringFilter<"Founder"> | string
    bio?: StringNullableFilter<"Founder"> | string | null
    twitter?: StringNullableFilter<"Founder"> | string | null
    linkedin?: StringNullableFilter<"Founder"> | string | null
    location?: StringNullableFilter<"Founder"> | string | null
    photoUrl?: StringNullableFilter<"Founder"> | string | null
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
  }

  export type FounderOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    title?: SortOrderInput | SortOrder
    companyId?: SortOrder
    bio?: SortOrderInput | SortOrder
    twitter?: SortOrderInput | SortOrder
    linkedin?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    photoUrl?: SortOrderInput | SortOrder
    company?: CompanyOrderByWithRelationInput
  }

  export type FounderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    companyId_slug?: FounderCompanyIdSlugCompoundUniqueInput
    AND?: FounderWhereInput | FounderWhereInput[]
    OR?: FounderWhereInput[]
    NOT?: FounderWhereInput | FounderWhereInput[]
    name?: StringFilter<"Founder"> | string
    title?: StringNullableFilter<"Founder"> | string | null
    companyId?: StringFilter<"Founder"> | string
    bio?: StringNullableFilter<"Founder"> | string | null
    twitter?: StringNullableFilter<"Founder"> | string | null
    linkedin?: StringNullableFilter<"Founder"> | string | null
    location?: StringNullableFilter<"Founder"> | string | null
    photoUrl?: StringNullableFilter<"Founder"> | string | null
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
  }, "id" | "slug" | "companyId_slug">

  export type FounderOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    title?: SortOrderInput | SortOrder
    companyId?: SortOrder
    bio?: SortOrderInput | SortOrder
    twitter?: SortOrderInput | SortOrder
    linkedin?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    photoUrl?: SortOrderInput | SortOrder
    _count?: FounderCountOrderByAggregateInput
    _max?: FounderMaxOrderByAggregateInput
    _min?: FounderMinOrderByAggregateInput
  }

  export type FounderScalarWhereWithAggregatesInput = {
    AND?: FounderScalarWhereWithAggregatesInput | FounderScalarWhereWithAggregatesInput[]
    OR?: FounderScalarWhereWithAggregatesInput[]
    NOT?: FounderScalarWhereWithAggregatesInput | FounderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Founder"> | string
    name?: StringWithAggregatesFilter<"Founder"> | string
    slug?: StringWithAggregatesFilter<"Founder"> | string
    title?: StringNullableWithAggregatesFilter<"Founder"> | string | null
    companyId?: StringWithAggregatesFilter<"Founder"> | string
    bio?: StringNullableWithAggregatesFilter<"Founder"> | string | null
    twitter?: StringNullableWithAggregatesFilter<"Founder"> | string | null
    linkedin?: StringNullableWithAggregatesFilter<"Founder"> | string | null
    location?: StringNullableWithAggregatesFilter<"Founder"> | string | null
    photoUrl?: StringNullableWithAggregatesFilter<"Founder"> | string | null
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: StringFilter<"Product"> | string
    companyId?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    slug?: StringFilter<"Product"> | string
    description?: StringNullableFilter<"Product"> | string | null
    category?: StringNullableFilter<"Product"> | string | null
    launchDate?: DateTimeNullableFilter<"Product"> | Date | string | null
    upvotes?: IntNullableFilter<"Product"> | number | null
    websiteUrl?: StringNullableFilter<"Product"> | string | null
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    tags?: TagListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    companyId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    launchDate?: SortOrderInput | SortOrder
    upvotes?: SortOrderInput | SortOrder
    websiteUrl?: SortOrderInput | SortOrder
    company?: CompanyOrderByWithRelationInput
    tags?: TagOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    companyId?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    description?: StringNullableFilter<"Product"> | string | null
    category?: StringNullableFilter<"Product"> | string | null
    launchDate?: DateTimeNullableFilter<"Product"> | Date | string | null
    upvotes?: IntNullableFilter<"Product"> | number | null
    websiteUrl?: StringNullableFilter<"Product"> | string | null
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    tags?: TagListRelationFilter
  }, "id" | "slug">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    companyId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    launchDate?: SortOrderInput | SortOrder
    upvotes?: SortOrderInput | SortOrder
    websiteUrl?: SortOrderInput | SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Product"> | string
    companyId?: StringWithAggregatesFilter<"Product"> | string
    name?: StringWithAggregatesFilter<"Product"> | string
    slug?: StringWithAggregatesFilter<"Product"> | string
    description?: StringNullableWithAggregatesFilter<"Product"> | string | null
    category?: StringNullableWithAggregatesFilter<"Product"> | string | null
    launchDate?: DateTimeNullableWithAggregatesFilter<"Product"> | Date | string | null
    upvotes?: IntNullableWithAggregatesFilter<"Product"> | number | null
    websiteUrl?: StringNullableWithAggregatesFilter<"Product"> | string | null
  }

  export type FundingRoundWhereInput = {
    AND?: FundingRoundWhereInput | FundingRoundWhereInput[]
    OR?: FundingRoundWhereInput[]
    NOT?: FundingRoundWhereInput | FundingRoundWhereInput[]
    id?: StringFilter<"FundingRound"> | string
    companyId?: StringFilter<"FundingRound"> | string
    roundType?: StringFilter<"FundingRound"> | string
    amount?: BigIntNullableFilter<"FundingRound"> | bigint | number | null
    currency?: StringNullableFilter<"FundingRound"> | string | null
    date?: DateTimeFilter<"FundingRound"> | Date | string
    leadInvestorId?: StringNullableFilter<"FundingRound"> | string | null
    coInvestors?: StringNullableListFilter<"FundingRound">
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    leadInvestor?: XOR<InvestorNullableScalarRelationFilter, InvestorWhereInput> | null
  }

  export type FundingRoundOrderByWithRelationInput = {
    id?: SortOrder
    companyId?: SortOrder
    roundType?: SortOrder
    amount?: SortOrderInput | SortOrder
    currency?: SortOrderInput | SortOrder
    date?: SortOrder
    leadInvestorId?: SortOrderInput | SortOrder
    coInvestors?: SortOrder
    company?: CompanyOrderByWithRelationInput
    leadInvestor?: InvestorOrderByWithRelationInput
  }

  export type FundingRoundWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FundingRoundWhereInput | FundingRoundWhereInput[]
    OR?: FundingRoundWhereInput[]
    NOT?: FundingRoundWhereInput | FundingRoundWhereInput[]
    companyId?: StringFilter<"FundingRound"> | string
    roundType?: StringFilter<"FundingRound"> | string
    amount?: BigIntNullableFilter<"FundingRound"> | bigint | number | null
    currency?: StringNullableFilter<"FundingRound"> | string | null
    date?: DateTimeFilter<"FundingRound"> | Date | string
    leadInvestorId?: StringNullableFilter<"FundingRound"> | string | null
    coInvestors?: StringNullableListFilter<"FundingRound">
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    leadInvestor?: XOR<InvestorNullableScalarRelationFilter, InvestorWhereInput> | null
  }, "id">

  export type FundingRoundOrderByWithAggregationInput = {
    id?: SortOrder
    companyId?: SortOrder
    roundType?: SortOrder
    amount?: SortOrderInput | SortOrder
    currency?: SortOrderInput | SortOrder
    date?: SortOrder
    leadInvestorId?: SortOrderInput | SortOrder
    coInvestors?: SortOrder
    _count?: FundingRoundCountOrderByAggregateInput
    _avg?: FundingRoundAvgOrderByAggregateInput
    _max?: FundingRoundMaxOrderByAggregateInput
    _min?: FundingRoundMinOrderByAggregateInput
    _sum?: FundingRoundSumOrderByAggregateInput
  }

  export type FundingRoundScalarWhereWithAggregatesInput = {
    AND?: FundingRoundScalarWhereWithAggregatesInput | FundingRoundScalarWhereWithAggregatesInput[]
    OR?: FundingRoundScalarWhereWithAggregatesInput[]
    NOT?: FundingRoundScalarWhereWithAggregatesInput | FundingRoundScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FundingRound"> | string
    companyId?: StringWithAggregatesFilter<"FundingRound"> | string
    roundType?: StringWithAggregatesFilter<"FundingRound"> | string
    amount?: BigIntNullableWithAggregatesFilter<"FundingRound"> | bigint | number | null
    currency?: StringNullableWithAggregatesFilter<"FundingRound"> | string | null
    date?: DateTimeWithAggregatesFilter<"FundingRound"> | Date | string
    leadInvestorId?: StringNullableWithAggregatesFilter<"FundingRound"> | string | null
    coInvestors?: StringNullableListFilter<"FundingRound">
  }

  export type NewsArticleWhereInput = {
    AND?: NewsArticleWhereInput | NewsArticleWhereInput[]
    OR?: NewsArticleWhereInput[]
    NOT?: NewsArticleWhereInput | NewsArticleWhereInput[]
    id?: StringFilter<"NewsArticle"> | string
    title?: StringFilter<"NewsArticle"> | string
    url?: StringFilter<"NewsArticle"> | string
    publishedAt?: DateTimeFilter<"NewsArticle"> | Date | string
    source?: StringFilter<"NewsArticle"> | string
    tag?: StringNullableFilter<"NewsArticle"> | string | null
    relatedCompanyIds?: StringNullableListFilter<"NewsArticle">
    summary?: StringNullableFilter<"NewsArticle"> | string | null
    companies?: CompanyListRelationFilter
  }

  export type NewsArticleOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    url?: SortOrder
    publishedAt?: SortOrder
    source?: SortOrder
    tag?: SortOrderInput | SortOrder
    relatedCompanyIds?: SortOrder
    summary?: SortOrderInput | SortOrder
    companies?: CompanyOrderByRelationAggregateInput
  }

  export type NewsArticleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NewsArticleWhereInput | NewsArticleWhereInput[]
    OR?: NewsArticleWhereInput[]
    NOT?: NewsArticleWhereInput | NewsArticleWhereInput[]
    title?: StringFilter<"NewsArticle"> | string
    url?: StringFilter<"NewsArticle"> | string
    publishedAt?: DateTimeFilter<"NewsArticle"> | Date | string
    source?: StringFilter<"NewsArticle"> | string
    tag?: StringNullableFilter<"NewsArticle"> | string | null
    relatedCompanyIds?: StringNullableListFilter<"NewsArticle">
    summary?: StringNullableFilter<"NewsArticle"> | string | null
    companies?: CompanyListRelationFilter
  }, "id">

  export type NewsArticleOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    url?: SortOrder
    publishedAt?: SortOrder
    source?: SortOrder
    tag?: SortOrderInput | SortOrder
    relatedCompanyIds?: SortOrder
    summary?: SortOrderInput | SortOrder
    _count?: NewsArticleCountOrderByAggregateInput
    _max?: NewsArticleMaxOrderByAggregateInput
    _min?: NewsArticleMinOrderByAggregateInput
  }

  export type NewsArticleScalarWhereWithAggregatesInput = {
    AND?: NewsArticleScalarWhereWithAggregatesInput | NewsArticleScalarWhereWithAggregatesInput[]
    OR?: NewsArticleScalarWhereWithAggregatesInput[]
    NOT?: NewsArticleScalarWhereWithAggregatesInput | NewsArticleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NewsArticle"> | string
    title?: StringWithAggregatesFilter<"NewsArticle"> | string
    url?: StringWithAggregatesFilter<"NewsArticle"> | string
    publishedAt?: DateTimeWithAggregatesFilter<"NewsArticle"> | Date | string
    source?: StringWithAggregatesFilter<"NewsArticle"> | string
    tag?: StringNullableWithAggregatesFilter<"NewsArticle"> | string | null
    relatedCompanyIds?: StringNullableListFilter<"NewsArticle">
    summary?: StringNullableWithAggregatesFilter<"NewsArticle"> | string | null
  }

  export type TagWhereInput = {
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    id?: StringFilter<"Tag"> | string
    name?: StringFilter<"Tag"> | string
    slug?: StringFilter<"Tag"> | string
    type?: EnumTagTypeFilter<"Tag"> | $Enums.TagType
    companies?: CompanyListRelationFilter
    products?: ProductListRelationFilter
  }

  export type TagOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    type?: SortOrder
    companies?: CompanyOrderByRelationAggregateInput
    products?: ProductOrderByRelationAggregateInput
  }

  export type TagWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    name?: StringFilter<"Tag"> | string
    type?: EnumTagTypeFilter<"Tag"> | $Enums.TagType
    companies?: CompanyListRelationFilter
    products?: ProductListRelationFilter
  }, "id" | "slug">

  export type TagOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    type?: SortOrder
    _count?: TagCountOrderByAggregateInput
    _max?: TagMaxOrderByAggregateInput
    _min?: TagMinOrderByAggregateInput
  }

  export type TagScalarWhereWithAggregatesInput = {
    AND?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    OR?: TagScalarWhereWithAggregatesInput[]
    NOT?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tag"> | string
    name?: StringWithAggregatesFilter<"Tag"> | string
    slug?: StringWithAggregatesFilter<"Tag"> | string
    type?: EnumTagTypeWithAggregatesFilter<"Tag"> | $Enums.TagType
  }

  export type CompanyRelationshipWhereInput = {
    AND?: CompanyRelationshipWhereInput | CompanyRelationshipWhereInput[]
    OR?: CompanyRelationshipWhereInput[]
    NOT?: CompanyRelationshipWhereInput | CompanyRelationshipWhereInput[]
    id?: StringFilter<"CompanyRelationship"> | string
    sourceCompanyId?: StringFilter<"CompanyRelationship"> | string
    targetCompanyId?: StringFilter<"CompanyRelationship"> | string
    relationshipType?: EnumRelationshipTypeFilter<"CompanyRelationship"> | $Enums.RelationshipType
    sourceCompany?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    targetCompany?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
  }

  export type CompanyRelationshipOrderByWithRelationInput = {
    id?: SortOrder
    sourceCompanyId?: SortOrder
    targetCompanyId?: SortOrder
    relationshipType?: SortOrder
    sourceCompany?: CompanyOrderByWithRelationInput
    targetCompany?: CompanyOrderByWithRelationInput
  }

  export type CompanyRelationshipWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sourceCompanyId_targetCompanyId_relationshipType?: CompanyRelationshipSourceCompanyIdTargetCompanyIdRelationshipTypeCompoundUniqueInput
    AND?: CompanyRelationshipWhereInput | CompanyRelationshipWhereInput[]
    OR?: CompanyRelationshipWhereInput[]
    NOT?: CompanyRelationshipWhereInput | CompanyRelationshipWhereInput[]
    sourceCompanyId?: StringFilter<"CompanyRelationship"> | string
    targetCompanyId?: StringFilter<"CompanyRelationship"> | string
    relationshipType?: EnumRelationshipTypeFilter<"CompanyRelationship"> | $Enums.RelationshipType
    sourceCompany?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    targetCompany?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
  }, "id" | "sourceCompanyId_targetCompanyId_relationshipType">

  export type CompanyRelationshipOrderByWithAggregationInput = {
    id?: SortOrder
    sourceCompanyId?: SortOrder
    targetCompanyId?: SortOrder
    relationshipType?: SortOrder
    _count?: CompanyRelationshipCountOrderByAggregateInput
    _max?: CompanyRelationshipMaxOrderByAggregateInput
    _min?: CompanyRelationshipMinOrderByAggregateInput
  }

  export type CompanyRelationshipScalarWhereWithAggregatesInput = {
    AND?: CompanyRelationshipScalarWhereWithAggregatesInput | CompanyRelationshipScalarWhereWithAggregatesInput[]
    OR?: CompanyRelationshipScalarWhereWithAggregatesInput[]
    NOT?: CompanyRelationshipScalarWhereWithAggregatesInput | CompanyRelationshipScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CompanyRelationship"> | string
    sourceCompanyId?: StringWithAggregatesFilter<"CompanyRelationship"> | string
    targetCompanyId?: StringWithAggregatesFilter<"CompanyRelationship"> | string
    relationshipType?: EnumRelationshipTypeWithAggregatesFilter<"CompanyRelationship"> | $Enums.RelationshipType
  }

  export type CompanyCreateInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    category: string
    fundingTotal?: bigint | number | null
    employeeCount?: number | null
    foundedYear?: number | null
    hqCity?: string | null
    hqCountry?: string | null
    logoUrl?: string | null
    website?: string | null
    stage?: string | null
    isUnicorn?: boolean | null
    valuation?: bigint | number | null
    growthScore?: number | null
    lastScrapedAt?: Date | string | null
    dataConfidenceScore?: number | null
    claimedBy?: string | null
    claimedAt?: Date | string | null
    founders?: FounderCreateNestedManyWithoutCompanyInput
    products?: ProductCreateNestedManyWithoutCompanyInput
    fundingRounds?: FundingRoundCreateNestedManyWithoutCompanyInput
    relatedFrom?: CompanyRelationshipCreateNestedManyWithoutSourceCompanyInput
    relatedTo?: CompanyRelationshipCreateNestedManyWithoutTargetCompanyInput
    newsArticles?: NewsArticleCreateNestedManyWithoutCompaniesInput
    tags?: TagCreateNestedManyWithoutCompaniesInput
  }

  export type CompanyUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    category: string
    fundingTotal?: bigint | number | null
    employeeCount?: number | null
    foundedYear?: number | null
    hqCity?: string | null
    hqCountry?: string | null
    logoUrl?: string | null
    website?: string | null
    stage?: string | null
    isUnicorn?: boolean | null
    valuation?: bigint | number | null
    growthScore?: number | null
    lastScrapedAt?: Date | string | null
    dataConfidenceScore?: number | null
    claimedBy?: string | null
    claimedAt?: Date | string | null
    founders?: FounderUncheckedCreateNestedManyWithoutCompanyInput
    products?: ProductUncheckedCreateNestedManyWithoutCompanyInput
    fundingRounds?: FundingRoundUncheckedCreateNestedManyWithoutCompanyInput
    relatedFrom?: CompanyRelationshipUncheckedCreateNestedManyWithoutSourceCompanyInput
    relatedTo?: CompanyRelationshipUncheckedCreateNestedManyWithoutTargetCompanyInput
    newsArticles?: NewsArticleUncheckedCreateNestedManyWithoutCompaniesInput
    tags?: TagUncheckedCreateNestedManyWithoutCompaniesInput
  }

  export type CompanyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    fundingTotal?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    employeeCount?: NullableIntFieldUpdateOperationsInput | number | null
    foundedYear?: NullableIntFieldUpdateOperationsInput | number | null
    hqCity?: NullableStringFieldUpdateOperationsInput | string | null
    hqCountry?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    stage?: NullableStringFieldUpdateOperationsInput | string | null
    isUnicorn?: NullableBoolFieldUpdateOperationsInput | boolean | null
    valuation?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    growthScore?: NullableFloatFieldUpdateOperationsInput | number | null
    lastScrapedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataConfidenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    claimedBy?: NullableStringFieldUpdateOperationsInput | string | null
    claimedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    founders?: FounderUpdateManyWithoutCompanyNestedInput
    products?: ProductUpdateManyWithoutCompanyNestedInput
    fundingRounds?: FundingRoundUpdateManyWithoutCompanyNestedInput
    relatedFrom?: CompanyRelationshipUpdateManyWithoutSourceCompanyNestedInput
    relatedTo?: CompanyRelationshipUpdateManyWithoutTargetCompanyNestedInput
    newsArticles?: NewsArticleUpdateManyWithoutCompaniesNestedInput
    tags?: TagUpdateManyWithoutCompaniesNestedInput
  }

  export type CompanyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    fundingTotal?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    employeeCount?: NullableIntFieldUpdateOperationsInput | number | null
    foundedYear?: NullableIntFieldUpdateOperationsInput | number | null
    hqCity?: NullableStringFieldUpdateOperationsInput | string | null
    hqCountry?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    stage?: NullableStringFieldUpdateOperationsInput | string | null
    isUnicorn?: NullableBoolFieldUpdateOperationsInput | boolean | null
    valuation?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    growthScore?: NullableFloatFieldUpdateOperationsInput | number | null
    lastScrapedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataConfidenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    claimedBy?: NullableStringFieldUpdateOperationsInput | string | null
    claimedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    founders?: FounderUncheckedUpdateManyWithoutCompanyNestedInput
    products?: ProductUncheckedUpdateManyWithoutCompanyNestedInput
    fundingRounds?: FundingRoundUncheckedUpdateManyWithoutCompanyNestedInput
    relatedFrom?: CompanyRelationshipUncheckedUpdateManyWithoutSourceCompanyNestedInput
    relatedTo?: CompanyRelationshipUncheckedUpdateManyWithoutTargetCompanyNestedInput
    newsArticles?: NewsArticleUncheckedUpdateManyWithoutCompaniesNestedInput
    tags?: TagUncheckedUpdateManyWithoutCompaniesNestedInput
  }

  export type CompanyCreateManyInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    category: string
    fundingTotal?: bigint | number | null
    employeeCount?: number | null
    foundedYear?: number | null
    hqCity?: string | null
    hqCountry?: string | null
    logoUrl?: string | null
    website?: string | null
    stage?: string | null
    isUnicorn?: boolean | null
    valuation?: bigint | number | null
    growthScore?: number | null
    lastScrapedAt?: Date | string | null
    dataConfidenceScore?: number | null
    claimedBy?: string | null
    claimedAt?: Date | string | null
  }

  export type CompanyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    fundingTotal?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    employeeCount?: NullableIntFieldUpdateOperationsInput | number | null
    foundedYear?: NullableIntFieldUpdateOperationsInput | number | null
    hqCity?: NullableStringFieldUpdateOperationsInput | string | null
    hqCountry?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    stage?: NullableStringFieldUpdateOperationsInput | string | null
    isUnicorn?: NullableBoolFieldUpdateOperationsInput | boolean | null
    valuation?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    growthScore?: NullableFloatFieldUpdateOperationsInput | number | null
    lastScrapedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataConfidenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    claimedBy?: NullableStringFieldUpdateOperationsInput | string | null
    claimedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CompanyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    fundingTotal?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    employeeCount?: NullableIntFieldUpdateOperationsInput | number | null
    foundedYear?: NullableIntFieldUpdateOperationsInput | number | null
    hqCity?: NullableStringFieldUpdateOperationsInput | string | null
    hqCountry?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    stage?: NullableStringFieldUpdateOperationsInput | string | null
    isUnicorn?: NullableBoolFieldUpdateOperationsInput | boolean | null
    valuation?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    growthScore?: NullableFloatFieldUpdateOperationsInput | number | null
    lastScrapedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataConfidenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    claimedBy?: NullableStringFieldUpdateOperationsInput | string | null
    claimedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InvestorCreateInput = {
    id?: string
    name: string
    slug: string
    type?: string | null
    bio?: string | null
    aum?: bigint | number | null
    portfolioCount?: number | null
    stageFocus?: InvestorCreatestageFocusInput | string[]
    sectorFocus?: InvestorCreatesectorFocusInput | string[]
    location?: string | null
    logoUrl?: string | null
    avgCheckSize?: bigint | number | null
    fundNumber?: number | null
    leadRounds?: FundingRoundCreateNestedManyWithoutLeadInvestorInput
  }

  export type InvestorUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    type?: string | null
    bio?: string | null
    aum?: bigint | number | null
    portfolioCount?: number | null
    stageFocus?: InvestorCreatestageFocusInput | string[]
    sectorFocus?: InvestorCreatesectorFocusInput | string[]
    location?: string | null
    logoUrl?: string | null
    avgCheckSize?: bigint | number | null
    fundNumber?: number | null
    leadRounds?: FundingRoundUncheckedCreateNestedManyWithoutLeadInvestorInput
  }

  export type InvestorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    aum?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    portfolioCount?: NullableIntFieldUpdateOperationsInput | number | null
    stageFocus?: InvestorUpdatestageFocusInput | string[]
    sectorFocus?: InvestorUpdatesectorFocusInput | string[]
    location?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    avgCheckSize?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    fundNumber?: NullableIntFieldUpdateOperationsInput | number | null
    leadRounds?: FundingRoundUpdateManyWithoutLeadInvestorNestedInput
  }

  export type InvestorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    aum?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    portfolioCount?: NullableIntFieldUpdateOperationsInput | number | null
    stageFocus?: InvestorUpdatestageFocusInput | string[]
    sectorFocus?: InvestorUpdatesectorFocusInput | string[]
    location?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    avgCheckSize?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    fundNumber?: NullableIntFieldUpdateOperationsInput | number | null
    leadRounds?: FundingRoundUncheckedUpdateManyWithoutLeadInvestorNestedInput
  }

  export type InvestorCreateManyInput = {
    id?: string
    name: string
    slug: string
    type?: string | null
    bio?: string | null
    aum?: bigint | number | null
    portfolioCount?: number | null
    stageFocus?: InvestorCreatestageFocusInput | string[]
    sectorFocus?: InvestorCreatesectorFocusInput | string[]
    location?: string | null
    logoUrl?: string | null
    avgCheckSize?: bigint | number | null
    fundNumber?: number | null
  }

  export type InvestorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    aum?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    portfolioCount?: NullableIntFieldUpdateOperationsInput | number | null
    stageFocus?: InvestorUpdatestageFocusInput | string[]
    sectorFocus?: InvestorUpdatesectorFocusInput | string[]
    location?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    avgCheckSize?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    fundNumber?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type InvestorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    aum?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    portfolioCount?: NullableIntFieldUpdateOperationsInput | number | null
    stageFocus?: InvestorUpdatestageFocusInput | string[]
    sectorFocus?: InvestorUpdatesectorFocusInput | string[]
    location?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    avgCheckSize?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    fundNumber?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type FounderCreateInput = {
    id?: string
    name: string
    slug: string
    title?: string | null
    bio?: string | null
    twitter?: string | null
    linkedin?: string | null
    location?: string | null
    photoUrl?: string | null
    company: CompanyCreateNestedOneWithoutFoundersInput
  }

  export type FounderUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    title?: string | null
    companyId: string
    bio?: string | null
    twitter?: string | null
    linkedin?: string | null
    location?: string | null
    photoUrl?: string | null
  }

  export type FounderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    company?: CompanyUpdateOneRequiredWithoutFoundersNestedInput
  }

  export type FounderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    companyId?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FounderCreateManyInput = {
    id?: string
    name: string
    slug: string
    title?: string | null
    companyId: string
    bio?: string | null
    twitter?: string | null
    linkedin?: string | null
    location?: string | null
    photoUrl?: string | null
  }

  export type FounderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FounderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    companyId?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductCreateInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    category?: string | null
    launchDate?: Date | string | null
    upvotes?: number | null
    websiteUrl?: string | null
    company: CompanyCreateNestedOneWithoutProductsInput
    tags?: TagCreateNestedManyWithoutProductsInput
  }

  export type ProductUncheckedCreateInput = {
    id?: string
    companyId: string
    name: string
    slug: string
    description?: string | null
    category?: string | null
    launchDate?: Date | string | null
    upvotes?: number | null
    websiteUrl?: string | null
    tags?: TagUncheckedCreateNestedManyWithoutProductsInput
  }

  export type ProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    launchDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    upvotes?: NullableIntFieldUpdateOperationsInput | number | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    company?: CompanyUpdateOneRequiredWithoutProductsNestedInput
    tags?: TagUpdateManyWithoutProductsNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    launchDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    upvotes?: NullableIntFieldUpdateOperationsInput | number | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: TagUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type ProductCreateManyInput = {
    id?: string
    companyId: string
    name: string
    slug: string
    description?: string | null
    category?: string | null
    launchDate?: Date | string | null
    upvotes?: number | null
    websiteUrl?: string | null
  }

  export type ProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    launchDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    upvotes?: NullableIntFieldUpdateOperationsInput | number | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    launchDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    upvotes?: NullableIntFieldUpdateOperationsInput | number | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FundingRoundCreateInput = {
    id?: string
    roundType: string
    amount?: bigint | number | null
    currency?: string | null
    date: Date | string
    coInvestors?: FundingRoundCreatecoInvestorsInput | string[]
    company: CompanyCreateNestedOneWithoutFundingRoundsInput
    leadInvestor?: InvestorCreateNestedOneWithoutLeadRoundsInput
  }

  export type FundingRoundUncheckedCreateInput = {
    id?: string
    companyId: string
    roundType: string
    amount?: bigint | number | null
    currency?: string | null
    date: Date | string
    leadInvestorId?: string | null
    coInvestors?: FundingRoundCreatecoInvestorsInput | string[]
  }

  export type FundingRoundUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    roundType?: StringFieldUpdateOperationsInput | string
    amount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    coInvestors?: FundingRoundUpdatecoInvestorsInput | string[]
    company?: CompanyUpdateOneRequiredWithoutFundingRoundsNestedInput
    leadInvestor?: InvestorUpdateOneWithoutLeadRoundsNestedInput
  }

  export type FundingRoundUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    roundType?: StringFieldUpdateOperationsInput | string
    amount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    leadInvestorId?: NullableStringFieldUpdateOperationsInput | string | null
    coInvestors?: FundingRoundUpdatecoInvestorsInput | string[]
  }

  export type FundingRoundCreateManyInput = {
    id?: string
    companyId: string
    roundType: string
    amount?: bigint | number | null
    currency?: string | null
    date: Date | string
    leadInvestorId?: string | null
    coInvestors?: FundingRoundCreatecoInvestorsInput | string[]
  }

  export type FundingRoundUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    roundType?: StringFieldUpdateOperationsInput | string
    amount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    coInvestors?: FundingRoundUpdatecoInvestorsInput | string[]
  }

  export type FundingRoundUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    roundType?: StringFieldUpdateOperationsInput | string
    amount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    leadInvestorId?: NullableStringFieldUpdateOperationsInput | string | null
    coInvestors?: FundingRoundUpdatecoInvestorsInput | string[]
  }

  export type NewsArticleCreateInput = {
    id?: string
    title: string
    url: string
    publishedAt: Date | string
    source: string
    tag?: string | null
    relatedCompanyIds?: NewsArticleCreaterelatedCompanyIdsInput | string[]
    summary?: string | null
    companies?: CompanyCreateNestedManyWithoutNewsArticlesInput
  }

  export type NewsArticleUncheckedCreateInput = {
    id?: string
    title: string
    url: string
    publishedAt: Date | string
    source: string
    tag?: string | null
    relatedCompanyIds?: NewsArticleCreaterelatedCompanyIdsInput | string[]
    summary?: string | null
    companies?: CompanyUncheckedCreateNestedManyWithoutNewsArticlesInput
  }

  export type NewsArticleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: StringFieldUpdateOperationsInput | string
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    relatedCompanyIds?: NewsArticleUpdaterelatedCompanyIdsInput | string[]
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    companies?: CompanyUpdateManyWithoutNewsArticlesNestedInput
  }

  export type NewsArticleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: StringFieldUpdateOperationsInput | string
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    relatedCompanyIds?: NewsArticleUpdaterelatedCompanyIdsInput | string[]
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    companies?: CompanyUncheckedUpdateManyWithoutNewsArticlesNestedInput
  }

  export type NewsArticleCreateManyInput = {
    id?: string
    title: string
    url: string
    publishedAt: Date | string
    source: string
    tag?: string | null
    relatedCompanyIds?: NewsArticleCreaterelatedCompanyIdsInput | string[]
    summary?: string | null
  }

  export type NewsArticleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: StringFieldUpdateOperationsInput | string
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    relatedCompanyIds?: NewsArticleUpdaterelatedCompanyIdsInput | string[]
    summary?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NewsArticleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: StringFieldUpdateOperationsInput | string
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    relatedCompanyIds?: NewsArticleUpdaterelatedCompanyIdsInput | string[]
    summary?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TagCreateInput = {
    id?: string
    name: string
    slug: string
    type: $Enums.TagType
    companies?: CompanyCreateNestedManyWithoutTagsInput
    products?: ProductCreateNestedManyWithoutTagsInput
  }

  export type TagUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    type: $Enums.TagType
    companies?: CompanyUncheckedCreateNestedManyWithoutTagsInput
    products?: ProductUncheckedCreateNestedManyWithoutTagsInput
  }

  export type TagUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    type?: EnumTagTypeFieldUpdateOperationsInput | $Enums.TagType
    companies?: CompanyUpdateManyWithoutTagsNestedInput
    products?: ProductUpdateManyWithoutTagsNestedInput
  }

  export type TagUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    type?: EnumTagTypeFieldUpdateOperationsInput | $Enums.TagType
    companies?: CompanyUncheckedUpdateManyWithoutTagsNestedInput
    products?: ProductUncheckedUpdateManyWithoutTagsNestedInput
  }

  export type TagCreateManyInput = {
    id?: string
    name: string
    slug: string
    type: $Enums.TagType
  }

  export type TagUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    type?: EnumTagTypeFieldUpdateOperationsInput | $Enums.TagType
  }

  export type TagUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    type?: EnumTagTypeFieldUpdateOperationsInput | $Enums.TagType
  }

  export type CompanyRelationshipCreateInput = {
    id?: string
    relationshipType: $Enums.RelationshipType
    sourceCompany: CompanyCreateNestedOneWithoutRelatedFromInput
    targetCompany: CompanyCreateNestedOneWithoutRelatedToInput
  }

  export type CompanyRelationshipUncheckedCreateInput = {
    id?: string
    sourceCompanyId: string
    targetCompanyId: string
    relationshipType: $Enums.RelationshipType
  }

  export type CompanyRelationshipUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    relationshipType?: EnumRelationshipTypeFieldUpdateOperationsInput | $Enums.RelationshipType
    sourceCompany?: CompanyUpdateOneRequiredWithoutRelatedFromNestedInput
    targetCompany?: CompanyUpdateOneRequiredWithoutRelatedToNestedInput
  }

  export type CompanyRelationshipUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceCompanyId?: StringFieldUpdateOperationsInput | string
    targetCompanyId?: StringFieldUpdateOperationsInput | string
    relationshipType?: EnumRelationshipTypeFieldUpdateOperationsInput | $Enums.RelationshipType
  }

  export type CompanyRelationshipCreateManyInput = {
    id?: string
    sourceCompanyId: string
    targetCompanyId: string
    relationshipType: $Enums.RelationshipType
  }

  export type CompanyRelationshipUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    relationshipType?: EnumRelationshipTypeFieldUpdateOperationsInput | $Enums.RelationshipType
  }

  export type CompanyRelationshipUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceCompanyId?: StringFieldUpdateOperationsInput | string
    targetCompanyId?: StringFieldUpdateOperationsInput | string
    relationshipType?: EnumRelationshipTypeFieldUpdateOperationsInput | $Enums.RelationshipType
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

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type FounderListRelationFilter = {
    every?: FounderWhereInput
    some?: FounderWhereInput
    none?: FounderWhereInput
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type FundingRoundListRelationFilter = {
    every?: FundingRoundWhereInput
    some?: FundingRoundWhereInput
    none?: FundingRoundWhereInput
  }

  export type CompanyRelationshipListRelationFilter = {
    every?: CompanyRelationshipWhereInput
    some?: CompanyRelationshipWhereInput
    none?: CompanyRelationshipWhereInput
  }

  export type NewsArticleListRelationFilter = {
    every?: NewsArticleWhereInput
    some?: NewsArticleWhereInput
    none?: NewsArticleWhereInput
  }

  export type TagListRelationFilter = {
    every?: TagWhereInput
    some?: TagWhereInput
    none?: TagWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type FounderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FundingRoundOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompanyRelationshipOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NewsArticleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompanyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    category?: SortOrder
    fundingTotal?: SortOrder
    employeeCount?: SortOrder
    foundedYear?: SortOrder
    hqCity?: SortOrder
    hqCountry?: SortOrder
    logoUrl?: SortOrder
    website?: SortOrder
    stage?: SortOrder
    isUnicorn?: SortOrder
    valuation?: SortOrder
    growthScore?: SortOrder
    lastScrapedAt?: SortOrder
    dataConfidenceScore?: SortOrder
    claimedBy?: SortOrder
    claimedAt?: SortOrder
  }

  export type CompanyAvgOrderByAggregateInput = {
    fundingTotal?: SortOrder
    employeeCount?: SortOrder
    foundedYear?: SortOrder
    valuation?: SortOrder
    growthScore?: SortOrder
    dataConfidenceScore?: SortOrder
  }

  export type CompanyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    category?: SortOrder
    fundingTotal?: SortOrder
    employeeCount?: SortOrder
    foundedYear?: SortOrder
    hqCity?: SortOrder
    hqCountry?: SortOrder
    logoUrl?: SortOrder
    website?: SortOrder
    stage?: SortOrder
    isUnicorn?: SortOrder
    valuation?: SortOrder
    growthScore?: SortOrder
    lastScrapedAt?: SortOrder
    dataConfidenceScore?: SortOrder
    claimedBy?: SortOrder
    claimedAt?: SortOrder
  }

  export type CompanyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    category?: SortOrder
    fundingTotal?: SortOrder
    employeeCount?: SortOrder
    foundedYear?: SortOrder
    hqCity?: SortOrder
    hqCountry?: SortOrder
    logoUrl?: SortOrder
    website?: SortOrder
    stage?: SortOrder
    isUnicorn?: SortOrder
    valuation?: SortOrder
    growthScore?: SortOrder
    lastScrapedAt?: SortOrder
    dataConfidenceScore?: SortOrder
    claimedBy?: SortOrder
    claimedAt?: SortOrder
  }

  export type CompanySumOrderByAggregateInput = {
    fundingTotal?: SortOrder
    employeeCount?: SortOrder
    foundedYear?: SortOrder
    valuation?: SortOrder
    growthScore?: SortOrder
    dataConfidenceScore?: SortOrder
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

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type InvestorCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    type?: SortOrder
    bio?: SortOrder
    aum?: SortOrder
    portfolioCount?: SortOrder
    stageFocus?: SortOrder
    sectorFocus?: SortOrder
    location?: SortOrder
    logoUrl?: SortOrder
    avgCheckSize?: SortOrder
    fundNumber?: SortOrder
  }

  export type InvestorAvgOrderByAggregateInput = {
    aum?: SortOrder
    portfolioCount?: SortOrder
    avgCheckSize?: SortOrder
    fundNumber?: SortOrder
  }

  export type InvestorMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    type?: SortOrder
    bio?: SortOrder
    aum?: SortOrder
    portfolioCount?: SortOrder
    location?: SortOrder
    logoUrl?: SortOrder
    avgCheckSize?: SortOrder
    fundNumber?: SortOrder
  }

  export type InvestorMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    type?: SortOrder
    bio?: SortOrder
    aum?: SortOrder
    portfolioCount?: SortOrder
    location?: SortOrder
    logoUrl?: SortOrder
    avgCheckSize?: SortOrder
    fundNumber?: SortOrder
  }

  export type InvestorSumOrderByAggregateInput = {
    aum?: SortOrder
    portfolioCount?: SortOrder
    avgCheckSize?: SortOrder
    fundNumber?: SortOrder
  }

  export type CompanyScalarRelationFilter = {
    is?: CompanyWhereInput
    isNot?: CompanyWhereInput
  }

  export type FounderCompanyIdSlugCompoundUniqueInput = {
    companyId: string
    slug: string
  }

  export type FounderCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    companyId?: SortOrder
    bio?: SortOrder
    twitter?: SortOrder
    linkedin?: SortOrder
    location?: SortOrder
    photoUrl?: SortOrder
  }

  export type FounderMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    companyId?: SortOrder
    bio?: SortOrder
    twitter?: SortOrder
    linkedin?: SortOrder
    location?: SortOrder
    photoUrl?: SortOrder
  }

  export type FounderMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    companyId?: SortOrder
    bio?: SortOrder
    twitter?: SortOrder
    linkedin?: SortOrder
    location?: SortOrder
    photoUrl?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    category?: SortOrder
    launchDate?: SortOrder
    upvotes?: SortOrder
    websiteUrl?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    upvotes?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    category?: SortOrder
    launchDate?: SortOrder
    upvotes?: SortOrder
    websiteUrl?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    category?: SortOrder
    launchDate?: SortOrder
    upvotes?: SortOrder
    websiteUrl?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    upvotes?: SortOrder
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

  export type InvestorNullableScalarRelationFilter = {
    is?: InvestorWhereInput | null
    isNot?: InvestorWhereInput | null
  }

  export type FundingRoundCountOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    roundType?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    date?: SortOrder
    leadInvestorId?: SortOrder
    coInvestors?: SortOrder
  }

  export type FundingRoundAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type FundingRoundMaxOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    roundType?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    date?: SortOrder
    leadInvestorId?: SortOrder
  }

  export type FundingRoundMinOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    roundType?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    date?: SortOrder
    leadInvestorId?: SortOrder
  }

  export type FundingRoundSumOrderByAggregateInput = {
    amount?: SortOrder
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

  export type CompanyListRelationFilter = {
    every?: CompanyWhereInput
    some?: CompanyWhereInput
    none?: CompanyWhereInput
  }

  export type CompanyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NewsArticleCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    url?: SortOrder
    publishedAt?: SortOrder
    source?: SortOrder
    tag?: SortOrder
    relatedCompanyIds?: SortOrder
    summary?: SortOrder
  }

  export type NewsArticleMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    url?: SortOrder
    publishedAt?: SortOrder
    source?: SortOrder
    tag?: SortOrder
    summary?: SortOrder
  }

  export type NewsArticleMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    url?: SortOrder
    publishedAt?: SortOrder
    source?: SortOrder
    tag?: SortOrder
    summary?: SortOrder
  }

  export type EnumTagTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TagType | EnumTagTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TagType[] | ListEnumTagTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TagType[] | ListEnumTagTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTagTypeFilter<$PrismaModel> | $Enums.TagType
  }

  export type TagCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    type?: SortOrder
  }

  export type TagMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    type?: SortOrder
  }

  export type TagMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    type?: SortOrder
  }

  export type EnumTagTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TagType | EnumTagTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TagType[] | ListEnumTagTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TagType[] | ListEnumTagTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTagTypeWithAggregatesFilter<$PrismaModel> | $Enums.TagType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTagTypeFilter<$PrismaModel>
    _max?: NestedEnumTagTypeFilter<$PrismaModel>
  }

  export type EnumRelationshipTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.RelationshipType | EnumRelationshipTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RelationshipType[] | ListEnumRelationshipTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RelationshipType[] | ListEnumRelationshipTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRelationshipTypeFilter<$PrismaModel> | $Enums.RelationshipType
  }

  export type CompanyRelationshipSourceCompanyIdTargetCompanyIdRelationshipTypeCompoundUniqueInput = {
    sourceCompanyId: string
    targetCompanyId: string
    relationshipType: $Enums.RelationshipType
  }

  export type CompanyRelationshipCountOrderByAggregateInput = {
    id?: SortOrder
    sourceCompanyId?: SortOrder
    targetCompanyId?: SortOrder
    relationshipType?: SortOrder
  }

  export type CompanyRelationshipMaxOrderByAggregateInput = {
    id?: SortOrder
    sourceCompanyId?: SortOrder
    targetCompanyId?: SortOrder
    relationshipType?: SortOrder
  }

  export type CompanyRelationshipMinOrderByAggregateInput = {
    id?: SortOrder
    sourceCompanyId?: SortOrder
    targetCompanyId?: SortOrder
    relationshipType?: SortOrder
  }

  export type EnumRelationshipTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RelationshipType | EnumRelationshipTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RelationshipType[] | ListEnumRelationshipTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RelationshipType[] | ListEnumRelationshipTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRelationshipTypeWithAggregatesFilter<$PrismaModel> | $Enums.RelationshipType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRelationshipTypeFilter<$PrismaModel>
    _max?: NestedEnumRelationshipTypeFilter<$PrismaModel>
  }

  export type FounderCreateNestedManyWithoutCompanyInput = {
    create?: XOR<FounderCreateWithoutCompanyInput, FounderUncheckedCreateWithoutCompanyInput> | FounderCreateWithoutCompanyInput[] | FounderUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: FounderCreateOrConnectWithoutCompanyInput | FounderCreateOrConnectWithoutCompanyInput[]
    createMany?: FounderCreateManyCompanyInputEnvelope
    connect?: FounderWhereUniqueInput | FounderWhereUniqueInput[]
  }

  export type ProductCreateNestedManyWithoutCompanyInput = {
    create?: XOR<ProductCreateWithoutCompanyInput, ProductUncheckedCreateWithoutCompanyInput> | ProductCreateWithoutCompanyInput[] | ProductUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCompanyInput | ProductCreateOrConnectWithoutCompanyInput[]
    createMany?: ProductCreateManyCompanyInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type FundingRoundCreateNestedManyWithoutCompanyInput = {
    create?: XOR<FundingRoundCreateWithoutCompanyInput, FundingRoundUncheckedCreateWithoutCompanyInput> | FundingRoundCreateWithoutCompanyInput[] | FundingRoundUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: FundingRoundCreateOrConnectWithoutCompanyInput | FundingRoundCreateOrConnectWithoutCompanyInput[]
    createMany?: FundingRoundCreateManyCompanyInputEnvelope
    connect?: FundingRoundWhereUniqueInput | FundingRoundWhereUniqueInput[]
  }

  export type CompanyRelationshipCreateNestedManyWithoutSourceCompanyInput = {
    create?: XOR<CompanyRelationshipCreateWithoutSourceCompanyInput, CompanyRelationshipUncheckedCreateWithoutSourceCompanyInput> | CompanyRelationshipCreateWithoutSourceCompanyInput[] | CompanyRelationshipUncheckedCreateWithoutSourceCompanyInput[]
    connectOrCreate?: CompanyRelationshipCreateOrConnectWithoutSourceCompanyInput | CompanyRelationshipCreateOrConnectWithoutSourceCompanyInput[]
    createMany?: CompanyRelationshipCreateManySourceCompanyInputEnvelope
    connect?: CompanyRelationshipWhereUniqueInput | CompanyRelationshipWhereUniqueInput[]
  }

  export type CompanyRelationshipCreateNestedManyWithoutTargetCompanyInput = {
    create?: XOR<CompanyRelationshipCreateWithoutTargetCompanyInput, CompanyRelationshipUncheckedCreateWithoutTargetCompanyInput> | CompanyRelationshipCreateWithoutTargetCompanyInput[] | CompanyRelationshipUncheckedCreateWithoutTargetCompanyInput[]
    connectOrCreate?: CompanyRelationshipCreateOrConnectWithoutTargetCompanyInput | CompanyRelationshipCreateOrConnectWithoutTargetCompanyInput[]
    createMany?: CompanyRelationshipCreateManyTargetCompanyInputEnvelope
    connect?: CompanyRelationshipWhereUniqueInput | CompanyRelationshipWhereUniqueInput[]
  }

  export type NewsArticleCreateNestedManyWithoutCompaniesInput = {
    create?: XOR<NewsArticleCreateWithoutCompaniesInput, NewsArticleUncheckedCreateWithoutCompaniesInput> | NewsArticleCreateWithoutCompaniesInput[] | NewsArticleUncheckedCreateWithoutCompaniesInput[]
    connectOrCreate?: NewsArticleCreateOrConnectWithoutCompaniesInput | NewsArticleCreateOrConnectWithoutCompaniesInput[]
    connect?: NewsArticleWhereUniqueInput | NewsArticleWhereUniqueInput[]
  }

  export type TagCreateNestedManyWithoutCompaniesInput = {
    create?: XOR<TagCreateWithoutCompaniesInput, TagUncheckedCreateWithoutCompaniesInput> | TagCreateWithoutCompaniesInput[] | TagUncheckedCreateWithoutCompaniesInput[]
    connectOrCreate?: TagCreateOrConnectWithoutCompaniesInput | TagCreateOrConnectWithoutCompaniesInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type FounderUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<FounderCreateWithoutCompanyInput, FounderUncheckedCreateWithoutCompanyInput> | FounderCreateWithoutCompanyInput[] | FounderUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: FounderCreateOrConnectWithoutCompanyInput | FounderCreateOrConnectWithoutCompanyInput[]
    createMany?: FounderCreateManyCompanyInputEnvelope
    connect?: FounderWhereUniqueInput | FounderWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<ProductCreateWithoutCompanyInput, ProductUncheckedCreateWithoutCompanyInput> | ProductCreateWithoutCompanyInput[] | ProductUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCompanyInput | ProductCreateOrConnectWithoutCompanyInput[]
    createMany?: ProductCreateManyCompanyInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type FundingRoundUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<FundingRoundCreateWithoutCompanyInput, FundingRoundUncheckedCreateWithoutCompanyInput> | FundingRoundCreateWithoutCompanyInput[] | FundingRoundUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: FundingRoundCreateOrConnectWithoutCompanyInput | FundingRoundCreateOrConnectWithoutCompanyInput[]
    createMany?: FundingRoundCreateManyCompanyInputEnvelope
    connect?: FundingRoundWhereUniqueInput | FundingRoundWhereUniqueInput[]
  }

  export type CompanyRelationshipUncheckedCreateNestedManyWithoutSourceCompanyInput = {
    create?: XOR<CompanyRelationshipCreateWithoutSourceCompanyInput, CompanyRelationshipUncheckedCreateWithoutSourceCompanyInput> | CompanyRelationshipCreateWithoutSourceCompanyInput[] | CompanyRelationshipUncheckedCreateWithoutSourceCompanyInput[]
    connectOrCreate?: CompanyRelationshipCreateOrConnectWithoutSourceCompanyInput | CompanyRelationshipCreateOrConnectWithoutSourceCompanyInput[]
    createMany?: CompanyRelationshipCreateManySourceCompanyInputEnvelope
    connect?: CompanyRelationshipWhereUniqueInput | CompanyRelationshipWhereUniqueInput[]
  }

  export type CompanyRelationshipUncheckedCreateNestedManyWithoutTargetCompanyInput = {
    create?: XOR<CompanyRelationshipCreateWithoutTargetCompanyInput, CompanyRelationshipUncheckedCreateWithoutTargetCompanyInput> | CompanyRelationshipCreateWithoutTargetCompanyInput[] | CompanyRelationshipUncheckedCreateWithoutTargetCompanyInput[]
    connectOrCreate?: CompanyRelationshipCreateOrConnectWithoutTargetCompanyInput | CompanyRelationshipCreateOrConnectWithoutTargetCompanyInput[]
    createMany?: CompanyRelationshipCreateManyTargetCompanyInputEnvelope
    connect?: CompanyRelationshipWhereUniqueInput | CompanyRelationshipWhereUniqueInput[]
  }

  export type NewsArticleUncheckedCreateNestedManyWithoutCompaniesInput = {
    create?: XOR<NewsArticleCreateWithoutCompaniesInput, NewsArticleUncheckedCreateWithoutCompaniesInput> | NewsArticleCreateWithoutCompaniesInput[] | NewsArticleUncheckedCreateWithoutCompaniesInput[]
    connectOrCreate?: NewsArticleCreateOrConnectWithoutCompaniesInput | NewsArticleCreateOrConnectWithoutCompaniesInput[]
    connect?: NewsArticleWhereUniqueInput | NewsArticleWhereUniqueInput[]
  }

  export type TagUncheckedCreateNestedManyWithoutCompaniesInput = {
    create?: XOR<TagCreateWithoutCompaniesInput, TagUncheckedCreateWithoutCompaniesInput> | TagCreateWithoutCompaniesInput[] | TagUncheckedCreateWithoutCompaniesInput[]
    connectOrCreate?: TagCreateOrConnectWithoutCompaniesInput | TagCreateOrConnectWithoutCompaniesInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type FounderUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<FounderCreateWithoutCompanyInput, FounderUncheckedCreateWithoutCompanyInput> | FounderCreateWithoutCompanyInput[] | FounderUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: FounderCreateOrConnectWithoutCompanyInput | FounderCreateOrConnectWithoutCompanyInput[]
    upsert?: FounderUpsertWithWhereUniqueWithoutCompanyInput | FounderUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: FounderCreateManyCompanyInputEnvelope
    set?: FounderWhereUniqueInput | FounderWhereUniqueInput[]
    disconnect?: FounderWhereUniqueInput | FounderWhereUniqueInput[]
    delete?: FounderWhereUniqueInput | FounderWhereUniqueInput[]
    connect?: FounderWhereUniqueInput | FounderWhereUniqueInput[]
    update?: FounderUpdateWithWhereUniqueWithoutCompanyInput | FounderUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: FounderUpdateManyWithWhereWithoutCompanyInput | FounderUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: FounderScalarWhereInput | FounderScalarWhereInput[]
  }

  export type ProductUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<ProductCreateWithoutCompanyInput, ProductUncheckedCreateWithoutCompanyInput> | ProductCreateWithoutCompanyInput[] | ProductUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCompanyInput | ProductCreateOrConnectWithoutCompanyInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCompanyInput | ProductUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: ProductCreateManyCompanyInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCompanyInput | ProductUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCompanyInput | ProductUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type FundingRoundUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<FundingRoundCreateWithoutCompanyInput, FundingRoundUncheckedCreateWithoutCompanyInput> | FundingRoundCreateWithoutCompanyInput[] | FundingRoundUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: FundingRoundCreateOrConnectWithoutCompanyInput | FundingRoundCreateOrConnectWithoutCompanyInput[]
    upsert?: FundingRoundUpsertWithWhereUniqueWithoutCompanyInput | FundingRoundUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: FundingRoundCreateManyCompanyInputEnvelope
    set?: FundingRoundWhereUniqueInput | FundingRoundWhereUniqueInput[]
    disconnect?: FundingRoundWhereUniqueInput | FundingRoundWhereUniqueInput[]
    delete?: FundingRoundWhereUniqueInput | FundingRoundWhereUniqueInput[]
    connect?: FundingRoundWhereUniqueInput | FundingRoundWhereUniqueInput[]
    update?: FundingRoundUpdateWithWhereUniqueWithoutCompanyInput | FundingRoundUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: FundingRoundUpdateManyWithWhereWithoutCompanyInput | FundingRoundUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: FundingRoundScalarWhereInput | FundingRoundScalarWhereInput[]
  }

  export type CompanyRelationshipUpdateManyWithoutSourceCompanyNestedInput = {
    create?: XOR<CompanyRelationshipCreateWithoutSourceCompanyInput, CompanyRelationshipUncheckedCreateWithoutSourceCompanyInput> | CompanyRelationshipCreateWithoutSourceCompanyInput[] | CompanyRelationshipUncheckedCreateWithoutSourceCompanyInput[]
    connectOrCreate?: CompanyRelationshipCreateOrConnectWithoutSourceCompanyInput | CompanyRelationshipCreateOrConnectWithoutSourceCompanyInput[]
    upsert?: CompanyRelationshipUpsertWithWhereUniqueWithoutSourceCompanyInput | CompanyRelationshipUpsertWithWhereUniqueWithoutSourceCompanyInput[]
    createMany?: CompanyRelationshipCreateManySourceCompanyInputEnvelope
    set?: CompanyRelationshipWhereUniqueInput | CompanyRelationshipWhereUniqueInput[]
    disconnect?: CompanyRelationshipWhereUniqueInput | CompanyRelationshipWhereUniqueInput[]
    delete?: CompanyRelationshipWhereUniqueInput | CompanyRelationshipWhereUniqueInput[]
    connect?: CompanyRelationshipWhereUniqueInput | CompanyRelationshipWhereUniqueInput[]
    update?: CompanyRelationshipUpdateWithWhereUniqueWithoutSourceCompanyInput | CompanyRelationshipUpdateWithWhereUniqueWithoutSourceCompanyInput[]
    updateMany?: CompanyRelationshipUpdateManyWithWhereWithoutSourceCompanyInput | CompanyRelationshipUpdateManyWithWhereWithoutSourceCompanyInput[]
    deleteMany?: CompanyRelationshipScalarWhereInput | CompanyRelationshipScalarWhereInput[]
  }

  export type CompanyRelationshipUpdateManyWithoutTargetCompanyNestedInput = {
    create?: XOR<CompanyRelationshipCreateWithoutTargetCompanyInput, CompanyRelationshipUncheckedCreateWithoutTargetCompanyInput> | CompanyRelationshipCreateWithoutTargetCompanyInput[] | CompanyRelationshipUncheckedCreateWithoutTargetCompanyInput[]
    connectOrCreate?: CompanyRelationshipCreateOrConnectWithoutTargetCompanyInput | CompanyRelationshipCreateOrConnectWithoutTargetCompanyInput[]
    upsert?: CompanyRelationshipUpsertWithWhereUniqueWithoutTargetCompanyInput | CompanyRelationshipUpsertWithWhereUniqueWithoutTargetCompanyInput[]
    createMany?: CompanyRelationshipCreateManyTargetCompanyInputEnvelope
    set?: CompanyRelationshipWhereUniqueInput | CompanyRelationshipWhereUniqueInput[]
    disconnect?: CompanyRelationshipWhereUniqueInput | CompanyRelationshipWhereUniqueInput[]
    delete?: CompanyRelationshipWhereUniqueInput | CompanyRelationshipWhereUniqueInput[]
    connect?: CompanyRelationshipWhereUniqueInput | CompanyRelationshipWhereUniqueInput[]
    update?: CompanyRelationshipUpdateWithWhereUniqueWithoutTargetCompanyInput | CompanyRelationshipUpdateWithWhereUniqueWithoutTargetCompanyInput[]
    updateMany?: CompanyRelationshipUpdateManyWithWhereWithoutTargetCompanyInput | CompanyRelationshipUpdateManyWithWhereWithoutTargetCompanyInput[]
    deleteMany?: CompanyRelationshipScalarWhereInput | CompanyRelationshipScalarWhereInput[]
  }

  export type NewsArticleUpdateManyWithoutCompaniesNestedInput = {
    create?: XOR<NewsArticleCreateWithoutCompaniesInput, NewsArticleUncheckedCreateWithoutCompaniesInput> | NewsArticleCreateWithoutCompaniesInput[] | NewsArticleUncheckedCreateWithoutCompaniesInput[]
    connectOrCreate?: NewsArticleCreateOrConnectWithoutCompaniesInput | NewsArticleCreateOrConnectWithoutCompaniesInput[]
    upsert?: NewsArticleUpsertWithWhereUniqueWithoutCompaniesInput | NewsArticleUpsertWithWhereUniqueWithoutCompaniesInput[]
    set?: NewsArticleWhereUniqueInput | NewsArticleWhereUniqueInput[]
    disconnect?: NewsArticleWhereUniqueInput | NewsArticleWhereUniqueInput[]
    delete?: NewsArticleWhereUniqueInput | NewsArticleWhereUniqueInput[]
    connect?: NewsArticleWhereUniqueInput | NewsArticleWhereUniqueInput[]
    update?: NewsArticleUpdateWithWhereUniqueWithoutCompaniesInput | NewsArticleUpdateWithWhereUniqueWithoutCompaniesInput[]
    updateMany?: NewsArticleUpdateManyWithWhereWithoutCompaniesInput | NewsArticleUpdateManyWithWhereWithoutCompaniesInput[]
    deleteMany?: NewsArticleScalarWhereInput | NewsArticleScalarWhereInput[]
  }

  export type TagUpdateManyWithoutCompaniesNestedInput = {
    create?: XOR<TagCreateWithoutCompaniesInput, TagUncheckedCreateWithoutCompaniesInput> | TagCreateWithoutCompaniesInput[] | TagUncheckedCreateWithoutCompaniesInput[]
    connectOrCreate?: TagCreateOrConnectWithoutCompaniesInput | TagCreateOrConnectWithoutCompaniesInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutCompaniesInput | TagUpsertWithWhereUniqueWithoutCompaniesInput[]
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutCompaniesInput | TagUpdateWithWhereUniqueWithoutCompaniesInput[]
    updateMany?: TagUpdateManyWithWhereWithoutCompaniesInput | TagUpdateManyWithWhereWithoutCompaniesInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type FounderUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<FounderCreateWithoutCompanyInput, FounderUncheckedCreateWithoutCompanyInput> | FounderCreateWithoutCompanyInput[] | FounderUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: FounderCreateOrConnectWithoutCompanyInput | FounderCreateOrConnectWithoutCompanyInput[]
    upsert?: FounderUpsertWithWhereUniqueWithoutCompanyInput | FounderUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: FounderCreateManyCompanyInputEnvelope
    set?: FounderWhereUniqueInput | FounderWhereUniqueInput[]
    disconnect?: FounderWhereUniqueInput | FounderWhereUniqueInput[]
    delete?: FounderWhereUniqueInput | FounderWhereUniqueInput[]
    connect?: FounderWhereUniqueInput | FounderWhereUniqueInput[]
    update?: FounderUpdateWithWhereUniqueWithoutCompanyInput | FounderUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: FounderUpdateManyWithWhereWithoutCompanyInput | FounderUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: FounderScalarWhereInput | FounderScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<ProductCreateWithoutCompanyInput, ProductUncheckedCreateWithoutCompanyInput> | ProductCreateWithoutCompanyInput[] | ProductUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCompanyInput | ProductCreateOrConnectWithoutCompanyInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCompanyInput | ProductUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: ProductCreateManyCompanyInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCompanyInput | ProductUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCompanyInput | ProductUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type FundingRoundUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<FundingRoundCreateWithoutCompanyInput, FundingRoundUncheckedCreateWithoutCompanyInput> | FundingRoundCreateWithoutCompanyInput[] | FundingRoundUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: FundingRoundCreateOrConnectWithoutCompanyInput | FundingRoundCreateOrConnectWithoutCompanyInput[]
    upsert?: FundingRoundUpsertWithWhereUniqueWithoutCompanyInput | FundingRoundUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: FundingRoundCreateManyCompanyInputEnvelope
    set?: FundingRoundWhereUniqueInput | FundingRoundWhereUniqueInput[]
    disconnect?: FundingRoundWhereUniqueInput | FundingRoundWhereUniqueInput[]
    delete?: FundingRoundWhereUniqueInput | FundingRoundWhereUniqueInput[]
    connect?: FundingRoundWhereUniqueInput | FundingRoundWhereUniqueInput[]
    update?: FundingRoundUpdateWithWhereUniqueWithoutCompanyInput | FundingRoundUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: FundingRoundUpdateManyWithWhereWithoutCompanyInput | FundingRoundUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: FundingRoundScalarWhereInput | FundingRoundScalarWhereInput[]
  }

  export type CompanyRelationshipUncheckedUpdateManyWithoutSourceCompanyNestedInput = {
    create?: XOR<CompanyRelationshipCreateWithoutSourceCompanyInput, CompanyRelationshipUncheckedCreateWithoutSourceCompanyInput> | CompanyRelationshipCreateWithoutSourceCompanyInput[] | CompanyRelationshipUncheckedCreateWithoutSourceCompanyInput[]
    connectOrCreate?: CompanyRelationshipCreateOrConnectWithoutSourceCompanyInput | CompanyRelationshipCreateOrConnectWithoutSourceCompanyInput[]
    upsert?: CompanyRelationshipUpsertWithWhereUniqueWithoutSourceCompanyInput | CompanyRelationshipUpsertWithWhereUniqueWithoutSourceCompanyInput[]
    createMany?: CompanyRelationshipCreateManySourceCompanyInputEnvelope
    set?: CompanyRelationshipWhereUniqueInput | CompanyRelationshipWhereUniqueInput[]
    disconnect?: CompanyRelationshipWhereUniqueInput | CompanyRelationshipWhereUniqueInput[]
    delete?: CompanyRelationshipWhereUniqueInput | CompanyRelationshipWhereUniqueInput[]
    connect?: CompanyRelationshipWhereUniqueInput | CompanyRelationshipWhereUniqueInput[]
    update?: CompanyRelationshipUpdateWithWhereUniqueWithoutSourceCompanyInput | CompanyRelationshipUpdateWithWhereUniqueWithoutSourceCompanyInput[]
    updateMany?: CompanyRelationshipUpdateManyWithWhereWithoutSourceCompanyInput | CompanyRelationshipUpdateManyWithWhereWithoutSourceCompanyInput[]
    deleteMany?: CompanyRelationshipScalarWhereInput | CompanyRelationshipScalarWhereInput[]
  }

  export type CompanyRelationshipUncheckedUpdateManyWithoutTargetCompanyNestedInput = {
    create?: XOR<CompanyRelationshipCreateWithoutTargetCompanyInput, CompanyRelationshipUncheckedCreateWithoutTargetCompanyInput> | CompanyRelationshipCreateWithoutTargetCompanyInput[] | CompanyRelationshipUncheckedCreateWithoutTargetCompanyInput[]
    connectOrCreate?: CompanyRelationshipCreateOrConnectWithoutTargetCompanyInput | CompanyRelationshipCreateOrConnectWithoutTargetCompanyInput[]
    upsert?: CompanyRelationshipUpsertWithWhereUniqueWithoutTargetCompanyInput | CompanyRelationshipUpsertWithWhereUniqueWithoutTargetCompanyInput[]
    createMany?: CompanyRelationshipCreateManyTargetCompanyInputEnvelope
    set?: CompanyRelationshipWhereUniqueInput | CompanyRelationshipWhereUniqueInput[]
    disconnect?: CompanyRelationshipWhereUniqueInput | CompanyRelationshipWhereUniqueInput[]
    delete?: CompanyRelationshipWhereUniqueInput | CompanyRelationshipWhereUniqueInput[]
    connect?: CompanyRelationshipWhereUniqueInput | CompanyRelationshipWhereUniqueInput[]
    update?: CompanyRelationshipUpdateWithWhereUniqueWithoutTargetCompanyInput | CompanyRelationshipUpdateWithWhereUniqueWithoutTargetCompanyInput[]
    updateMany?: CompanyRelationshipUpdateManyWithWhereWithoutTargetCompanyInput | CompanyRelationshipUpdateManyWithWhereWithoutTargetCompanyInput[]
    deleteMany?: CompanyRelationshipScalarWhereInput | CompanyRelationshipScalarWhereInput[]
  }

  export type NewsArticleUncheckedUpdateManyWithoutCompaniesNestedInput = {
    create?: XOR<NewsArticleCreateWithoutCompaniesInput, NewsArticleUncheckedCreateWithoutCompaniesInput> | NewsArticleCreateWithoutCompaniesInput[] | NewsArticleUncheckedCreateWithoutCompaniesInput[]
    connectOrCreate?: NewsArticleCreateOrConnectWithoutCompaniesInput | NewsArticleCreateOrConnectWithoutCompaniesInput[]
    upsert?: NewsArticleUpsertWithWhereUniqueWithoutCompaniesInput | NewsArticleUpsertWithWhereUniqueWithoutCompaniesInput[]
    set?: NewsArticleWhereUniqueInput | NewsArticleWhereUniqueInput[]
    disconnect?: NewsArticleWhereUniqueInput | NewsArticleWhereUniqueInput[]
    delete?: NewsArticleWhereUniqueInput | NewsArticleWhereUniqueInput[]
    connect?: NewsArticleWhereUniqueInput | NewsArticleWhereUniqueInput[]
    update?: NewsArticleUpdateWithWhereUniqueWithoutCompaniesInput | NewsArticleUpdateWithWhereUniqueWithoutCompaniesInput[]
    updateMany?: NewsArticleUpdateManyWithWhereWithoutCompaniesInput | NewsArticleUpdateManyWithWhereWithoutCompaniesInput[]
    deleteMany?: NewsArticleScalarWhereInput | NewsArticleScalarWhereInput[]
  }

  export type TagUncheckedUpdateManyWithoutCompaniesNestedInput = {
    create?: XOR<TagCreateWithoutCompaniesInput, TagUncheckedCreateWithoutCompaniesInput> | TagCreateWithoutCompaniesInput[] | TagUncheckedCreateWithoutCompaniesInput[]
    connectOrCreate?: TagCreateOrConnectWithoutCompaniesInput | TagCreateOrConnectWithoutCompaniesInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutCompaniesInput | TagUpsertWithWhereUniqueWithoutCompaniesInput[]
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutCompaniesInput | TagUpdateWithWhereUniqueWithoutCompaniesInput[]
    updateMany?: TagUpdateManyWithWhereWithoutCompaniesInput | TagUpdateManyWithWhereWithoutCompaniesInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type InvestorCreatestageFocusInput = {
    set: string[]
  }

  export type InvestorCreatesectorFocusInput = {
    set: string[]
  }

  export type FundingRoundCreateNestedManyWithoutLeadInvestorInput = {
    create?: XOR<FundingRoundCreateWithoutLeadInvestorInput, FundingRoundUncheckedCreateWithoutLeadInvestorInput> | FundingRoundCreateWithoutLeadInvestorInput[] | FundingRoundUncheckedCreateWithoutLeadInvestorInput[]
    connectOrCreate?: FundingRoundCreateOrConnectWithoutLeadInvestorInput | FundingRoundCreateOrConnectWithoutLeadInvestorInput[]
    createMany?: FundingRoundCreateManyLeadInvestorInputEnvelope
    connect?: FundingRoundWhereUniqueInput | FundingRoundWhereUniqueInput[]
  }

  export type FundingRoundUncheckedCreateNestedManyWithoutLeadInvestorInput = {
    create?: XOR<FundingRoundCreateWithoutLeadInvestorInput, FundingRoundUncheckedCreateWithoutLeadInvestorInput> | FundingRoundCreateWithoutLeadInvestorInput[] | FundingRoundUncheckedCreateWithoutLeadInvestorInput[]
    connectOrCreate?: FundingRoundCreateOrConnectWithoutLeadInvestorInput | FundingRoundCreateOrConnectWithoutLeadInvestorInput[]
    createMany?: FundingRoundCreateManyLeadInvestorInputEnvelope
    connect?: FundingRoundWhereUniqueInput | FundingRoundWhereUniqueInput[]
  }

  export type InvestorUpdatestageFocusInput = {
    set?: string[]
    push?: string | string[]
  }

  export type InvestorUpdatesectorFocusInput = {
    set?: string[]
    push?: string | string[]
  }

  export type FundingRoundUpdateManyWithoutLeadInvestorNestedInput = {
    create?: XOR<FundingRoundCreateWithoutLeadInvestorInput, FundingRoundUncheckedCreateWithoutLeadInvestorInput> | FundingRoundCreateWithoutLeadInvestorInput[] | FundingRoundUncheckedCreateWithoutLeadInvestorInput[]
    connectOrCreate?: FundingRoundCreateOrConnectWithoutLeadInvestorInput | FundingRoundCreateOrConnectWithoutLeadInvestorInput[]
    upsert?: FundingRoundUpsertWithWhereUniqueWithoutLeadInvestorInput | FundingRoundUpsertWithWhereUniqueWithoutLeadInvestorInput[]
    createMany?: FundingRoundCreateManyLeadInvestorInputEnvelope
    set?: FundingRoundWhereUniqueInput | FundingRoundWhereUniqueInput[]
    disconnect?: FundingRoundWhereUniqueInput | FundingRoundWhereUniqueInput[]
    delete?: FundingRoundWhereUniqueInput | FundingRoundWhereUniqueInput[]
    connect?: FundingRoundWhereUniqueInput | FundingRoundWhereUniqueInput[]
    update?: FundingRoundUpdateWithWhereUniqueWithoutLeadInvestorInput | FundingRoundUpdateWithWhereUniqueWithoutLeadInvestorInput[]
    updateMany?: FundingRoundUpdateManyWithWhereWithoutLeadInvestorInput | FundingRoundUpdateManyWithWhereWithoutLeadInvestorInput[]
    deleteMany?: FundingRoundScalarWhereInput | FundingRoundScalarWhereInput[]
  }

  export type FundingRoundUncheckedUpdateManyWithoutLeadInvestorNestedInput = {
    create?: XOR<FundingRoundCreateWithoutLeadInvestorInput, FundingRoundUncheckedCreateWithoutLeadInvestorInput> | FundingRoundCreateWithoutLeadInvestorInput[] | FundingRoundUncheckedCreateWithoutLeadInvestorInput[]
    connectOrCreate?: FundingRoundCreateOrConnectWithoutLeadInvestorInput | FundingRoundCreateOrConnectWithoutLeadInvestorInput[]
    upsert?: FundingRoundUpsertWithWhereUniqueWithoutLeadInvestorInput | FundingRoundUpsertWithWhereUniqueWithoutLeadInvestorInput[]
    createMany?: FundingRoundCreateManyLeadInvestorInputEnvelope
    set?: FundingRoundWhereUniqueInput | FundingRoundWhereUniqueInput[]
    disconnect?: FundingRoundWhereUniqueInput | FundingRoundWhereUniqueInput[]
    delete?: FundingRoundWhereUniqueInput | FundingRoundWhereUniqueInput[]
    connect?: FundingRoundWhereUniqueInput | FundingRoundWhereUniqueInput[]
    update?: FundingRoundUpdateWithWhereUniqueWithoutLeadInvestorInput | FundingRoundUpdateWithWhereUniqueWithoutLeadInvestorInput[]
    updateMany?: FundingRoundUpdateManyWithWhereWithoutLeadInvestorInput | FundingRoundUpdateManyWithWhereWithoutLeadInvestorInput[]
    deleteMany?: FundingRoundScalarWhereInput | FundingRoundScalarWhereInput[]
  }

  export type CompanyCreateNestedOneWithoutFoundersInput = {
    create?: XOR<CompanyCreateWithoutFoundersInput, CompanyUncheckedCreateWithoutFoundersInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutFoundersInput
    connect?: CompanyWhereUniqueInput
  }

  export type CompanyUpdateOneRequiredWithoutFoundersNestedInput = {
    create?: XOR<CompanyCreateWithoutFoundersInput, CompanyUncheckedCreateWithoutFoundersInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutFoundersInput
    upsert?: CompanyUpsertWithoutFoundersInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutFoundersInput, CompanyUpdateWithoutFoundersInput>, CompanyUncheckedUpdateWithoutFoundersInput>
  }

  export type CompanyCreateNestedOneWithoutProductsInput = {
    create?: XOR<CompanyCreateWithoutProductsInput, CompanyUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutProductsInput
    connect?: CompanyWhereUniqueInput
  }

  export type TagCreateNestedManyWithoutProductsInput = {
    create?: XOR<TagCreateWithoutProductsInput, TagUncheckedCreateWithoutProductsInput> | TagCreateWithoutProductsInput[] | TagUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: TagCreateOrConnectWithoutProductsInput | TagCreateOrConnectWithoutProductsInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type TagUncheckedCreateNestedManyWithoutProductsInput = {
    create?: XOR<TagCreateWithoutProductsInput, TagUncheckedCreateWithoutProductsInput> | TagCreateWithoutProductsInput[] | TagUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: TagCreateOrConnectWithoutProductsInput | TagCreateOrConnectWithoutProductsInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type CompanyUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<CompanyCreateWithoutProductsInput, CompanyUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutProductsInput
    upsert?: CompanyUpsertWithoutProductsInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutProductsInput, CompanyUpdateWithoutProductsInput>, CompanyUncheckedUpdateWithoutProductsInput>
  }

  export type TagUpdateManyWithoutProductsNestedInput = {
    create?: XOR<TagCreateWithoutProductsInput, TagUncheckedCreateWithoutProductsInput> | TagCreateWithoutProductsInput[] | TagUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: TagCreateOrConnectWithoutProductsInput | TagCreateOrConnectWithoutProductsInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutProductsInput | TagUpsertWithWhereUniqueWithoutProductsInput[]
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutProductsInput | TagUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: TagUpdateManyWithWhereWithoutProductsInput | TagUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type TagUncheckedUpdateManyWithoutProductsNestedInput = {
    create?: XOR<TagCreateWithoutProductsInput, TagUncheckedCreateWithoutProductsInput> | TagCreateWithoutProductsInput[] | TagUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: TagCreateOrConnectWithoutProductsInput | TagCreateOrConnectWithoutProductsInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutProductsInput | TagUpsertWithWhereUniqueWithoutProductsInput[]
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutProductsInput | TagUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: TagUpdateManyWithWhereWithoutProductsInput | TagUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type FundingRoundCreatecoInvestorsInput = {
    set: string[]
  }

  export type CompanyCreateNestedOneWithoutFundingRoundsInput = {
    create?: XOR<CompanyCreateWithoutFundingRoundsInput, CompanyUncheckedCreateWithoutFundingRoundsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutFundingRoundsInput
    connect?: CompanyWhereUniqueInput
  }

  export type InvestorCreateNestedOneWithoutLeadRoundsInput = {
    create?: XOR<InvestorCreateWithoutLeadRoundsInput, InvestorUncheckedCreateWithoutLeadRoundsInput>
    connectOrCreate?: InvestorCreateOrConnectWithoutLeadRoundsInput
    connect?: InvestorWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FundingRoundUpdatecoInvestorsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type CompanyUpdateOneRequiredWithoutFundingRoundsNestedInput = {
    create?: XOR<CompanyCreateWithoutFundingRoundsInput, CompanyUncheckedCreateWithoutFundingRoundsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutFundingRoundsInput
    upsert?: CompanyUpsertWithoutFundingRoundsInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutFundingRoundsInput, CompanyUpdateWithoutFundingRoundsInput>, CompanyUncheckedUpdateWithoutFundingRoundsInput>
  }

  export type InvestorUpdateOneWithoutLeadRoundsNestedInput = {
    create?: XOR<InvestorCreateWithoutLeadRoundsInput, InvestorUncheckedCreateWithoutLeadRoundsInput>
    connectOrCreate?: InvestorCreateOrConnectWithoutLeadRoundsInput
    upsert?: InvestorUpsertWithoutLeadRoundsInput
    disconnect?: InvestorWhereInput | boolean
    delete?: InvestorWhereInput | boolean
    connect?: InvestorWhereUniqueInput
    update?: XOR<XOR<InvestorUpdateToOneWithWhereWithoutLeadRoundsInput, InvestorUpdateWithoutLeadRoundsInput>, InvestorUncheckedUpdateWithoutLeadRoundsInput>
  }

  export type NewsArticleCreaterelatedCompanyIdsInput = {
    set: string[]
  }

  export type CompanyCreateNestedManyWithoutNewsArticlesInput = {
    create?: XOR<CompanyCreateWithoutNewsArticlesInput, CompanyUncheckedCreateWithoutNewsArticlesInput> | CompanyCreateWithoutNewsArticlesInput[] | CompanyUncheckedCreateWithoutNewsArticlesInput[]
    connectOrCreate?: CompanyCreateOrConnectWithoutNewsArticlesInput | CompanyCreateOrConnectWithoutNewsArticlesInput[]
    connect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
  }

  export type CompanyUncheckedCreateNestedManyWithoutNewsArticlesInput = {
    create?: XOR<CompanyCreateWithoutNewsArticlesInput, CompanyUncheckedCreateWithoutNewsArticlesInput> | CompanyCreateWithoutNewsArticlesInput[] | CompanyUncheckedCreateWithoutNewsArticlesInput[]
    connectOrCreate?: CompanyCreateOrConnectWithoutNewsArticlesInput | CompanyCreateOrConnectWithoutNewsArticlesInput[]
    connect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
  }

  export type NewsArticleUpdaterelatedCompanyIdsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type CompanyUpdateManyWithoutNewsArticlesNestedInput = {
    create?: XOR<CompanyCreateWithoutNewsArticlesInput, CompanyUncheckedCreateWithoutNewsArticlesInput> | CompanyCreateWithoutNewsArticlesInput[] | CompanyUncheckedCreateWithoutNewsArticlesInput[]
    connectOrCreate?: CompanyCreateOrConnectWithoutNewsArticlesInput | CompanyCreateOrConnectWithoutNewsArticlesInput[]
    upsert?: CompanyUpsertWithWhereUniqueWithoutNewsArticlesInput | CompanyUpsertWithWhereUniqueWithoutNewsArticlesInput[]
    set?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    disconnect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    delete?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    connect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    update?: CompanyUpdateWithWhereUniqueWithoutNewsArticlesInput | CompanyUpdateWithWhereUniqueWithoutNewsArticlesInput[]
    updateMany?: CompanyUpdateManyWithWhereWithoutNewsArticlesInput | CompanyUpdateManyWithWhereWithoutNewsArticlesInput[]
    deleteMany?: CompanyScalarWhereInput | CompanyScalarWhereInput[]
  }

  export type CompanyUncheckedUpdateManyWithoutNewsArticlesNestedInput = {
    create?: XOR<CompanyCreateWithoutNewsArticlesInput, CompanyUncheckedCreateWithoutNewsArticlesInput> | CompanyCreateWithoutNewsArticlesInput[] | CompanyUncheckedCreateWithoutNewsArticlesInput[]
    connectOrCreate?: CompanyCreateOrConnectWithoutNewsArticlesInput | CompanyCreateOrConnectWithoutNewsArticlesInput[]
    upsert?: CompanyUpsertWithWhereUniqueWithoutNewsArticlesInput | CompanyUpsertWithWhereUniqueWithoutNewsArticlesInput[]
    set?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    disconnect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    delete?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    connect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    update?: CompanyUpdateWithWhereUniqueWithoutNewsArticlesInput | CompanyUpdateWithWhereUniqueWithoutNewsArticlesInput[]
    updateMany?: CompanyUpdateManyWithWhereWithoutNewsArticlesInput | CompanyUpdateManyWithWhereWithoutNewsArticlesInput[]
    deleteMany?: CompanyScalarWhereInput | CompanyScalarWhereInput[]
  }

  export type CompanyCreateNestedManyWithoutTagsInput = {
    create?: XOR<CompanyCreateWithoutTagsInput, CompanyUncheckedCreateWithoutTagsInput> | CompanyCreateWithoutTagsInput[] | CompanyUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: CompanyCreateOrConnectWithoutTagsInput | CompanyCreateOrConnectWithoutTagsInput[]
    connect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
  }

  export type ProductCreateNestedManyWithoutTagsInput = {
    create?: XOR<ProductCreateWithoutTagsInput, ProductUncheckedCreateWithoutTagsInput> | ProductCreateWithoutTagsInput[] | ProductUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutTagsInput | ProductCreateOrConnectWithoutTagsInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type CompanyUncheckedCreateNestedManyWithoutTagsInput = {
    create?: XOR<CompanyCreateWithoutTagsInput, CompanyUncheckedCreateWithoutTagsInput> | CompanyCreateWithoutTagsInput[] | CompanyUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: CompanyCreateOrConnectWithoutTagsInput | CompanyCreateOrConnectWithoutTagsInput[]
    connect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutTagsInput = {
    create?: XOR<ProductCreateWithoutTagsInput, ProductUncheckedCreateWithoutTagsInput> | ProductCreateWithoutTagsInput[] | ProductUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutTagsInput | ProductCreateOrConnectWithoutTagsInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type EnumTagTypeFieldUpdateOperationsInput = {
    set?: $Enums.TagType
  }

  export type CompanyUpdateManyWithoutTagsNestedInput = {
    create?: XOR<CompanyCreateWithoutTagsInput, CompanyUncheckedCreateWithoutTagsInput> | CompanyCreateWithoutTagsInput[] | CompanyUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: CompanyCreateOrConnectWithoutTagsInput | CompanyCreateOrConnectWithoutTagsInput[]
    upsert?: CompanyUpsertWithWhereUniqueWithoutTagsInput | CompanyUpsertWithWhereUniqueWithoutTagsInput[]
    set?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    disconnect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    delete?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    connect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    update?: CompanyUpdateWithWhereUniqueWithoutTagsInput | CompanyUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: CompanyUpdateManyWithWhereWithoutTagsInput | CompanyUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: CompanyScalarWhereInput | CompanyScalarWhereInput[]
  }

  export type ProductUpdateManyWithoutTagsNestedInput = {
    create?: XOR<ProductCreateWithoutTagsInput, ProductUncheckedCreateWithoutTagsInput> | ProductCreateWithoutTagsInput[] | ProductUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutTagsInput | ProductCreateOrConnectWithoutTagsInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutTagsInput | ProductUpsertWithWhereUniqueWithoutTagsInput[]
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutTagsInput | ProductUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutTagsInput | ProductUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type CompanyUncheckedUpdateManyWithoutTagsNestedInput = {
    create?: XOR<CompanyCreateWithoutTagsInput, CompanyUncheckedCreateWithoutTagsInput> | CompanyCreateWithoutTagsInput[] | CompanyUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: CompanyCreateOrConnectWithoutTagsInput | CompanyCreateOrConnectWithoutTagsInput[]
    upsert?: CompanyUpsertWithWhereUniqueWithoutTagsInput | CompanyUpsertWithWhereUniqueWithoutTagsInput[]
    set?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    disconnect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    delete?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    connect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    update?: CompanyUpdateWithWhereUniqueWithoutTagsInput | CompanyUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: CompanyUpdateManyWithWhereWithoutTagsInput | CompanyUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: CompanyScalarWhereInput | CompanyScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutTagsNestedInput = {
    create?: XOR<ProductCreateWithoutTagsInput, ProductUncheckedCreateWithoutTagsInput> | ProductCreateWithoutTagsInput[] | ProductUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutTagsInput | ProductCreateOrConnectWithoutTagsInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutTagsInput | ProductUpsertWithWhereUniqueWithoutTagsInput[]
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutTagsInput | ProductUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutTagsInput | ProductUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type CompanyCreateNestedOneWithoutRelatedFromInput = {
    create?: XOR<CompanyCreateWithoutRelatedFromInput, CompanyUncheckedCreateWithoutRelatedFromInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutRelatedFromInput
    connect?: CompanyWhereUniqueInput
  }

  export type CompanyCreateNestedOneWithoutRelatedToInput = {
    create?: XOR<CompanyCreateWithoutRelatedToInput, CompanyUncheckedCreateWithoutRelatedToInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutRelatedToInput
    connect?: CompanyWhereUniqueInput
  }

  export type EnumRelationshipTypeFieldUpdateOperationsInput = {
    set?: $Enums.RelationshipType
  }

  export type CompanyUpdateOneRequiredWithoutRelatedFromNestedInput = {
    create?: XOR<CompanyCreateWithoutRelatedFromInput, CompanyUncheckedCreateWithoutRelatedFromInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutRelatedFromInput
    upsert?: CompanyUpsertWithoutRelatedFromInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutRelatedFromInput, CompanyUpdateWithoutRelatedFromInput>, CompanyUncheckedUpdateWithoutRelatedFromInput>
  }

  export type CompanyUpdateOneRequiredWithoutRelatedToNestedInput = {
    create?: XOR<CompanyCreateWithoutRelatedToInput, CompanyUncheckedCreateWithoutRelatedToInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutRelatedToInput
    upsert?: CompanyUpsertWithoutRelatedToInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutRelatedToInput, CompanyUpdateWithoutRelatedToInput>, CompanyUncheckedUpdateWithoutRelatedToInput>
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

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
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

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
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

  export type NestedEnumTagTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TagType | EnumTagTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TagType[] | ListEnumTagTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TagType[] | ListEnumTagTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTagTypeFilter<$PrismaModel> | $Enums.TagType
  }

  export type NestedEnumTagTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TagType | EnumTagTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TagType[] | ListEnumTagTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TagType[] | ListEnumTagTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTagTypeWithAggregatesFilter<$PrismaModel> | $Enums.TagType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTagTypeFilter<$PrismaModel>
    _max?: NestedEnumTagTypeFilter<$PrismaModel>
  }

  export type NestedEnumRelationshipTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.RelationshipType | EnumRelationshipTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RelationshipType[] | ListEnumRelationshipTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RelationshipType[] | ListEnumRelationshipTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRelationshipTypeFilter<$PrismaModel> | $Enums.RelationshipType
  }

  export type NestedEnumRelationshipTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RelationshipType | EnumRelationshipTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RelationshipType[] | ListEnumRelationshipTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RelationshipType[] | ListEnumRelationshipTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRelationshipTypeWithAggregatesFilter<$PrismaModel> | $Enums.RelationshipType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRelationshipTypeFilter<$PrismaModel>
    _max?: NestedEnumRelationshipTypeFilter<$PrismaModel>
  }

  export type FounderCreateWithoutCompanyInput = {
    id?: string
    name: string
    slug: string
    title?: string | null
    bio?: string | null
    twitter?: string | null
    linkedin?: string | null
    location?: string | null
    photoUrl?: string | null
  }

  export type FounderUncheckedCreateWithoutCompanyInput = {
    id?: string
    name: string
    slug: string
    title?: string | null
    bio?: string | null
    twitter?: string | null
    linkedin?: string | null
    location?: string | null
    photoUrl?: string | null
  }

  export type FounderCreateOrConnectWithoutCompanyInput = {
    where: FounderWhereUniqueInput
    create: XOR<FounderCreateWithoutCompanyInput, FounderUncheckedCreateWithoutCompanyInput>
  }

  export type FounderCreateManyCompanyInputEnvelope = {
    data: FounderCreateManyCompanyInput | FounderCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type ProductCreateWithoutCompanyInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    category?: string | null
    launchDate?: Date | string | null
    upvotes?: number | null
    websiteUrl?: string | null
    tags?: TagCreateNestedManyWithoutProductsInput
  }

  export type ProductUncheckedCreateWithoutCompanyInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    category?: string | null
    launchDate?: Date | string | null
    upvotes?: number | null
    websiteUrl?: string | null
    tags?: TagUncheckedCreateNestedManyWithoutProductsInput
  }

  export type ProductCreateOrConnectWithoutCompanyInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCompanyInput, ProductUncheckedCreateWithoutCompanyInput>
  }

  export type ProductCreateManyCompanyInputEnvelope = {
    data: ProductCreateManyCompanyInput | ProductCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type FundingRoundCreateWithoutCompanyInput = {
    id?: string
    roundType: string
    amount?: bigint | number | null
    currency?: string | null
    date: Date | string
    coInvestors?: FundingRoundCreatecoInvestorsInput | string[]
    leadInvestor?: InvestorCreateNestedOneWithoutLeadRoundsInput
  }

  export type FundingRoundUncheckedCreateWithoutCompanyInput = {
    id?: string
    roundType: string
    amount?: bigint | number | null
    currency?: string | null
    date: Date | string
    leadInvestorId?: string | null
    coInvestors?: FundingRoundCreatecoInvestorsInput | string[]
  }

  export type FundingRoundCreateOrConnectWithoutCompanyInput = {
    where: FundingRoundWhereUniqueInput
    create: XOR<FundingRoundCreateWithoutCompanyInput, FundingRoundUncheckedCreateWithoutCompanyInput>
  }

  export type FundingRoundCreateManyCompanyInputEnvelope = {
    data: FundingRoundCreateManyCompanyInput | FundingRoundCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type CompanyRelationshipCreateWithoutSourceCompanyInput = {
    id?: string
    relationshipType: $Enums.RelationshipType
    targetCompany: CompanyCreateNestedOneWithoutRelatedToInput
  }

  export type CompanyRelationshipUncheckedCreateWithoutSourceCompanyInput = {
    id?: string
    targetCompanyId: string
    relationshipType: $Enums.RelationshipType
  }

  export type CompanyRelationshipCreateOrConnectWithoutSourceCompanyInput = {
    where: CompanyRelationshipWhereUniqueInput
    create: XOR<CompanyRelationshipCreateWithoutSourceCompanyInput, CompanyRelationshipUncheckedCreateWithoutSourceCompanyInput>
  }

  export type CompanyRelationshipCreateManySourceCompanyInputEnvelope = {
    data: CompanyRelationshipCreateManySourceCompanyInput | CompanyRelationshipCreateManySourceCompanyInput[]
    skipDuplicates?: boolean
  }

  export type CompanyRelationshipCreateWithoutTargetCompanyInput = {
    id?: string
    relationshipType: $Enums.RelationshipType
    sourceCompany: CompanyCreateNestedOneWithoutRelatedFromInput
  }

  export type CompanyRelationshipUncheckedCreateWithoutTargetCompanyInput = {
    id?: string
    sourceCompanyId: string
    relationshipType: $Enums.RelationshipType
  }

  export type CompanyRelationshipCreateOrConnectWithoutTargetCompanyInput = {
    where: CompanyRelationshipWhereUniqueInput
    create: XOR<CompanyRelationshipCreateWithoutTargetCompanyInput, CompanyRelationshipUncheckedCreateWithoutTargetCompanyInput>
  }

  export type CompanyRelationshipCreateManyTargetCompanyInputEnvelope = {
    data: CompanyRelationshipCreateManyTargetCompanyInput | CompanyRelationshipCreateManyTargetCompanyInput[]
    skipDuplicates?: boolean
  }

  export type NewsArticleCreateWithoutCompaniesInput = {
    id?: string
    title: string
    url: string
    publishedAt: Date | string
    source: string
    tag?: string | null
    relatedCompanyIds?: NewsArticleCreaterelatedCompanyIdsInput | string[]
    summary?: string | null
  }

  export type NewsArticleUncheckedCreateWithoutCompaniesInput = {
    id?: string
    title: string
    url: string
    publishedAt: Date | string
    source: string
    tag?: string | null
    relatedCompanyIds?: NewsArticleCreaterelatedCompanyIdsInput | string[]
    summary?: string | null
  }

  export type NewsArticleCreateOrConnectWithoutCompaniesInput = {
    where: NewsArticleWhereUniqueInput
    create: XOR<NewsArticleCreateWithoutCompaniesInput, NewsArticleUncheckedCreateWithoutCompaniesInput>
  }

  export type TagCreateWithoutCompaniesInput = {
    id?: string
    name: string
    slug: string
    type: $Enums.TagType
    products?: ProductCreateNestedManyWithoutTagsInput
  }

  export type TagUncheckedCreateWithoutCompaniesInput = {
    id?: string
    name: string
    slug: string
    type: $Enums.TagType
    products?: ProductUncheckedCreateNestedManyWithoutTagsInput
  }

  export type TagCreateOrConnectWithoutCompaniesInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutCompaniesInput, TagUncheckedCreateWithoutCompaniesInput>
  }

  export type FounderUpsertWithWhereUniqueWithoutCompanyInput = {
    where: FounderWhereUniqueInput
    update: XOR<FounderUpdateWithoutCompanyInput, FounderUncheckedUpdateWithoutCompanyInput>
    create: XOR<FounderCreateWithoutCompanyInput, FounderUncheckedCreateWithoutCompanyInput>
  }

  export type FounderUpdateWithWhereUniqueWithoutCompanyInput = {
    where: FounderWhereUniqueInput
    data: XOR<FounderUpdateWithoutCompanyInput, FounderUncheckedUpdateWithoutCompanyInput>
  }

  export type FounderUpdateManyWithWhereWithoutCompanyInput = {
    where: FounderScalarWhereInput
    data: XOR<FounderUpdateManyMutationInput, FounderUncheckedUpdateManyWithoutCompanyInput>
  }

  export type FounderScalarWhereInput = {
    AND?: FounderScalarWhereInput | FounderScalarWhereInput[]
    OR?: FounderScalarWhereInput[]
    NOT?: FounderScalarWhereInput | FounderScalarWhereInput[]
    id?: StringFilter<"Founder"> | string
    name?: StringFilter<"Founder"> | string
    slug?: StringFilter<"Founder"> | string
    title?: StringNullableFilter<"Founder"> | string | null
    companyId?: StringFilter<"Founder"> | string
    bio?: StringNullableFilter<"Founder"> | string | null
    twitter?: StringNullableFilter<"Founder"> | string | null
    linkedin?: StringNullableFilter<"Founder"> | string | null
    location?: StringNullableFilter<"Founder"> | string | null
    photoUrl?: StringNullableFilter<"Founder"> | string | null
  }

  export type ProductUpsertWithWhereUniqueWithoutCompanyInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutCompanyInput, ProductUncheckedUpdateWithoutCompanyInput>
    create: XOR<ProductCreateWithoutCompanyInput, ProductUncheckedCreateWithoutCompanyInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutCompanyInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutCompanyInput, ProductUncheckedUpdateWithoutCompanyInput>
  }

  export type ProductUpdateManyWithWhereWithoutCompanyInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutCompanyInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    id?: StringFilter<"Product"> | string
    companyId?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    slug?: StringFilter<"Product"> | string
    description?: StringNullableFilter<"Product"> | string | null
    category?: StringNullableFilter<"Product"> | string | null
    launchDate?: DateTimeNullableFilter<"Product"> | Date | string | null
    upvotes?: IntNullableFilter<"Product"> | number | null
    websiteUrl?: StringNullableFilter<"Product"> | string | null
  }

  export type FundingRoundUpsertWithWhereUniqueWithoutCompanyInput = {
    where: FundingRoundWhereUniqueInput
    update: XOR<FundingRoundUpdateWithoutCompanyInput, FundingRoundUncheckedUpdateWithoutCompanyInput>
    create: XOR<FundingRoundCreateWithoutCompanyInput, FundingRoundUncheckedCreateWithoutCompanyInput>
  }

  export type FundingRoundUpdateWithWhereUniqueWithoutCompanyInput = {
    where: FundingRoundWhereUniqueInput
    data: XOR<FundingRoundUpdateWithoutCompanyInput, FundingRoundUncheckedUpdateWithoutCompanyInput>
  }

  export type FundingRoundUpdateManyWithWhereWithoutCompanyInput = {
    where: FundingRoundScalarWhereInput
    data: XOR<FundingRoundUpdateManyMutationInput, FundingRoundUncheckedUpdateManyWithoutCompanyInput>
  }

  export type FundingRoundScalarWhereInput = {
    AND?: FundingRoundScalarWhereInput | FundingRoundScalarWhereInput[]
    OR?: FundingRoundScalarWhereInput[]
    NOT?: FundingRoundScalarWhereInput | FundingRoundScalarWhereInput[]
    id?: StringFilter<"FundingRound"> | string
    companyId?: StringFilter<"FundingRound"> | string
    roundType?: StringFilter<"FundingRound"> | string
    amount?: BigIntNullableFilter<"FundingRound"> | bigint | number | null
    currency?: StringNullableFilter<"FundingRound"> | string | null
    date?: DateTimeFilter<"FundingRound"> | Date | string
    leadInvestorId?: StringNullableFilter<"FundingRound"> | string | null
    coInvestors?: StringNullableListFilter<"FundingRound">
  }

  export type CompanyRelationshipUpsertWithWhereUniqueWithoutSourceCompanyInput = {
    where: CompanyRelationshipWhereUniqueInput
    update: XOR<CompanyRelationshipUpdateWithoutSourceCompanyInput, CompanyRelationshipUncheckedUpdateWithoutSourceCompanyInput>
    create: XOR<CompanyRelationshipCreateWithoutSourceCompanyInput, CompanyRelationshipUncheckedCreateWithoutSourceCompanyInput>
  }

  export type CompanyRelationshipUpdateWithWhereUniqueWithoutSourceCompanyInput = {
    where: CompanyRelationshipWhereUniqueInput
    data: XOR<CompanyRelationshipUpdateWithoutSourceCompanyInput, CompanyRelationshipUncheckedUpdateWithoutSourceCompanyInput>
  }

  export type CompanyRelationshipUpdateManyWithWhereWithoutSourceCompanyInput = {
    where: CompanyRelationshipScalarWhereInput
    data: XOR<CompanyRelationshipUpdateManyMutationInput, CompanyRelationshipUncheckedUpdateManyWithoutSourceCompanyInput>
  }

  export type CompanyRelationshipScalarWhereInput = {
    AND?: CompanyRelationshipScalarWhereInput | CompanyRelationshipScalarWhereInput[]
    OR?: CompanyRelationshipScalarWhereInput[]
    NOT?: CompanyRelationshipScalarWhereInput | CompanyRelationshipScalarWhereInput[]
    id?: StringFilter<"CompanyRelationship"> | string
    sourceCompanyId?: StringFilter<"CompanyRelationship"> | string
    targetCompanyId?: StringFilter<"CompanyRelationship"> | string
    relationshipType?: EnumRelationshipTypeFilter<"CompanyRelationship"> | $Enums.RelationshipType
  }

  export type CompanyRelationshipUpsertWithWhereUniqueWithoutTargetCompanyInput = {
    where: CompanyRelationshipWhereUniqueInput
    update: XOR<CompanyRelationshipUpdateWithoutTargetCompanyInput, CompanyRelationshipUncheckedUpdateWithoutTargetCompanyInput>
    create: XOR<CompanyRelationshipCreateWithoutTargetCompanyInput, CompanyRelationshipUncheckedCreateWithoutTargetCompanyInput>
  }

  export type CompanyRelationshipUpdateWithWhereUniqueWithoutTargetCompanyInput = {
    where: CompanyRelationshipWhereUniqueInput
    data: XOR<CompanyRelationshipUpdateWithoutTargetCompanyInput, CompanyRelationshipUncheckedUpdateWithoutTargetCompanyInput>
  }

  export type CompanyRelationshipUpdateManyWithWhereWithoutTargetCompanyInput = {
    where: CompanyRelationshipScalarWhereInput
    data: XOR<CompanyRelationshipUpdateManyMutationInput, CompanyRelationshipUncheckedUpdateManyWithoutTargetCompanyInput>
  }

  export type NewsArticleUpsertWithWhereUniqueWithoutCompaniesInput = {
    where: NewsArticleWhereUniqueInput
    update: XOR<NewsArticleUpdateWithoutCompaniesInput, NewsArticleUncheckedUpdateWithoutCompaniesInput>
    create: XOR<NewsArticleCreateWithoutCompaniesInput, NewsArticleUncheckedCreateWithoutCompaniesInput>
  }

  export type NewsArticleUpdateWithWhereUniqueWithoutCompaniesInput = {
    where: NewsArticleWhereUniqueInput
    data: XOR<NewsArticleUpdateWithoutCompaniesInput, NewsArticleUncheckedUpdateWithoutCompaniesInput>
  }

  export type NewsArticleUpdateManyWithWhereWithoutCompaniesInput = {
    where: NewsArticleScalarWhereInput
    data: XOR<NewsArticleUpdateManyMutationInput, NewsArticleUncheckedUpdateManyWithoutCompaniesInput>
  }

  export type NewsArticleScalarWhereInput = {
    AND?: NewsArticleScalarWhereInput | NewsArticleScalarWhereInput[]
    OR?: NewsArticleScalarWhereInput[]
    NOT?: NewsArticleScalarWhereInput | NewsArticleScalarWhereInput[]
    id?: StringFilter<"NewsArticle"> | string
    title?: StringFilter<"NewsArticle"> | string
    url?: StringFilter<"NewsArticle"> | string
    publishedAt?: DateTimeFilter<"NewsArticle"> | Date | string
    source?: StringFilter<"NewsArticle"> | string
    tag?: StringNullableFilter<"NewsArticle"> | string | null
    relatedCompanyIds?: StringNullableListFilter<"NewsArticle">
    summary?: StringNullableFilter<"NewsArticle"> | string | null
  }

  export type TagUpsertWithWhereUniqueWithoutCompaniesInput = {
    where: TagWhereUniqueInput
    update: XOR<TagUpdateWithoutCompaniesInput, TagUncheckedUpdateWithoutCompaniesInput>
    create: XOR<TagCreateWithoutCompaniesInput, TagUncheckedCreateWithoutCompaniesInput>
  }

  export type TagUpdateWithWhereUniqueWithoutCompaniesInput = {
    where: TagWhereUniqueInput
    data: XOR<TagUpdateWithoutCompaniesInput, TagUncheckedUpdateWithoutCompaniesInput>
  }

  export type TagUpdateManyWithWhereWithoutCompaniesInput = {
    where: TagScalarWhereInput
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyWithoutCompaniesInput>
  }

  export type TagScalarWhereInput = {
    AND?: TagScalarWhereInput | TagScalarWhereInput[]
    OR?: TagScalarWhereInput[]
    NOT?: TagScalarWhereInput | TagScalarWhereInput[]
    id?: StringFilter<"Tag"> | string
    name?: StringFilter<"Tag"> | string
    slug?: StringFilter<"Tag"> | string
    type?: EnumTagTypeFilter<"Tag"> | $Enums.TagType
  }

  export type FundingRoundCreateWithoutLeadInvestorInput = {
    id?: string
    roundType: string
    amount?: bigint | number | null
    currency?: string | null
    date: Date | string
    coInvestors?: FundingRoundCreatecoInvestorsInput | string[]
    company: CompanyCreateNestedOneWithoutFundingRoundsInput
  }

  export type FundingRoundUncheckedCreateWithoutLeadInvestorInput = {
    id?: string
    companyId: string
    roundType: string
    amount?: bigint | number | null
    currency?: string | null
    date: Date | string
    coInvestors?: FundingRoundCreatecoInvestorsInput | string[]
  }

  export type FundingRoundCreateOrConnectWithoutLeadInvestorInput = {
    where: FundingRoundWhereUniqueInput
    create: XOR<FundingRoundCreateWithoutLeadInvestorInput, FundingRoundUncheckedCreateWithoutLeadInvestorInput>
  }

  export type FundingRoundCreateManyLeadInvestorInputEnvelope = {
    data: FundingRoundCreateManyLeadInvestorInput | FundingRoundCreateManyLeadInvestorInput[]
    skipDuplicates?: boolean
  }

  export type FundingRoundUpsertWithWhereUniqueWithoutLeadInvestorInput = {
    where: FundingRoundWhereUniqueInput
    update: XOR<FundingRoundUpdateWithoutLeadInvestorInput, FundingRoundUncheckedUpdateWithoutLeadInvestorInput>
    create: XOR<FundingRoundCreateWithoutLeadInvestorInput, FundingRoundUncheckedCreateWithoutLeadInvestorInput>
  }

  export type FundingRoundUpdateWithWhereUniqueWithoutLeadInvestorInput = {
    where: FundingRoundWhereUniqueInput
    data: XOR<FundingRoundUpdateWithoutLeadInvestorInput, FundingRoundUncheckedUpdateWithoutLeadInvestorInput>
  }

  export type FundingRoundUpdateManyWithWhereWithoutLeadInvestorInput = {
    where: FundingRoundScalarWhereInput
    data: XOR<FundingRoundUpdateManyMutationInput, FundingRoundUncheckedUpdateManyWithoutLeadInvestorInput>
  }

  export type CompanyCreateWithoutFoundersInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    category: string
    fundingTotal?: bigint | number | null
    employeeCount?: number | null
    foundedYear?: number | null
    hqCity?: string | null
    hqCountry?: string | null
    logoUrl?: string | null
    website?: string | null
    stage?: string | null
    isUnicorn?: boolean | null
    valuation?: bigint | number | null
    growthScore?: number | null
    lastScrapedAt?: Date | string | null
    dataConfidenceScore?: number | null
    claimedBy?: string | null
    claimedAt?: Date | string | null
    products?: ProductCreateNestedManyWithoutCompanyInput
    fundingRounds?: FundingRoundCreateNestedManyWithoutCompanyInput
    relatedFrom?: CompanyRelationshipCreateNestedManyWithoutSourceCompanyInput
    relatedTo?: CompanyRelationshipCreateNestedManyWithoutTargetCompanyInput
    newsArticles?: NewsArticleCreateNestedManyWithoutCompaniesInput
    tags?: TagCreateNestedManyWithoutCompaniesInput
  }

  export type CompanyUncheckedCreateWithoutFoundersInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    category: string
    fundingTotal?: bigint | number | null
    employeeCount?: number | null
    foundedYear?: number | null
    hqCity?: string | null
    hqCountry?: string | null
    logoUrl?: string | null
    website?: string | null
    stage?: string | null
    isUnicorn?: boolean | null
    valuation?: bigint | number | null
    growthScore?: number | null
    lastScrapedAt?: Date | string | null
    dataConfidenceScore?: number | null
    claimedBy?: string | null
    claimedAt?: Date | string | null
    products?: ProductUncheckedCreateNestedManyWithoutCompanyInput
    fundingRounds?: FundingRoundUncheckedCreateNestedManyWithoutCompanyInput
    relatedFrom?: CompanyRelationshipUncheckedCreateNestedManyWithoutSourceCompanyInput
    relatedTo?: CompanyRelationshipUncheckedCreateNestedManyWithoutTargetCompanyInput
    newsArticles?: NewsArticleUncheckedCreateNestedManyWithoutCompaniesInput
    tags?: TagUncheckedCreateNestedManyWithoutCompaniesInput
  }

  export type CompanyCreateOrConnectWithoutFoundersInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutFoundersInput, CompanyUncheckedCreateWithoutFoundersInput>
  }

  export type CompanyUpsertWithoutFoundersInput = {
    update: XOR<CompanyUpdateWithoutFoundersInput, CompanyUncheckedUpdateWithoutFoundersInput>
    create: XOR<CompanyCreateWithoutFoundersInput, CompanyUncheckedCreateWithoutFoundersInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutFoundersInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutFoundersInput, CompanyUncheckedUpdateWithoutFoundersInput>
  }

  export type CompanyUpdateWithoutFoundersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    fundingTotal?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    employeeCount?: NullableIntFieldUpdateOperationsInput | number | null
    foundedYear?: NullableIntFieldUpdateOperationsInput | number | null
    hqCity?: NullableStringFieldUpdateOperationsInput | string | null
    hqCountry?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    stage?: NullableStringFieldUpdateOperationsInput | string | null
    isUnicorn?: NullableBoolFieldUpdateOperationsInput | boolean | null
    valuation?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    growthScore?: NullableFloatFieldUpdateOperationsInput | number | null
    lastScrapedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataConfidenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    claimedBy?: NullableStringFieldUpdateOperationsInput | string | null
    claimedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    products?: ProductUpdateManyWithoutCompanyNestedInput
    fundingRounds?: FundingRoundUpdateManyWithoutCompanyNestedInput
    relatedFrom?: CompanyRelationshipUpdateManyWithoutSourceCompanyNestedInput
    relatedTo?: CompanyRelationshipUpdateManyWithoutTargetCompanyNestedInput
    newsArticles?: NewsArticleUpdateManyWithoutCompaniesNestedInput
    tags?: TagUpdateManyWithoutCompaniesNestedInput
  }

  export type CompanyUncheckedUpdateWithoutFoundersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    fundingTotal?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    employeeCount?: NullableIntFieldUpdateOperationsInput | number | null
    foundedYear?: NullableIntFieldUpdateOperationsInput | number | null
    hqCity?: NullableStringFieldUpdateOperationsInput | string | null
    hqCountry?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    stage?: NullableStringFieldUpdateOperationsInput | string | null
    isUnicorn?: NullableBoolFieldUpdateOperationsInput | boolean | null
    valuation?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    growthScore?: NullableFloatFieldUpdateOperationsInput | number | null
    lastScrapedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataConfidenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    claimedBy?: NullableStringFieldUpdateOperationsInput | string | null
    claimedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    products?: ProductUncheckedUpdateManyWithoutCompanyNestedInput
    fundingRounds?: FundingRoundUncheckedUpdateManyWithoutCompanyNestedInput
    relatedFrom?: CompanyRelationshipUncheckedUpdateManyWithoutSourceCompanyNestedInput
    relatedTo?: CompanyRelationshipUncheckedUpdateManyWithoutTargetCompanyNestedInput
    newsArticles?: NewsArticleUncheckedUpdateManyWithoutCompaniesNestedInput
    tags?: TagUncheckedUpdateManyWithoutCompaniesNestedInput
  }

  export type CompanyCreateWithoutProductsInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    category: string
    fundingTotal?: bigint | number | null
    employeeCount?: number | null
    foundedYear?: number | null
    hqCity?: string | null
    hqCountry?: string | null
    logoUrl?: string | null
    website?: string | null
    stage?: string | null
    isUnicorn?: boolean | null
    valuation?: bigint | number | null
    growthScore?: number | null
    lastScrapedAt?: Date | string | null
    dataConfidenceScore?: number | null
    claimedBy?: string | null
    claimedAt?: Date | string | null
    founders?: FounderCreateNestedManyWithoutCompanyInput
    fundingRounds?: FundingRoundCreateNestedManyWithoutCompanyInput
    relatedFrom?: CompanyRelationshipCreateNestedManyWithoutSourceCompanyInput
    relatedTo?: CompanyRelationshipCreateNestedManyWithoutTargetCompanyInput
    newsArticles?: NewsArticleCreateNestedManyWithoutCompaniesInput
    tags?: TagCreateNestedManyWithoutCompaniesInput
  }

  export type CompanyUncheckedCreateWithoutProductsInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    category: string
    fundingTotal?: bigint | number | null
    employeeCount?: number | null
    foundedYear?: number | null
    hqCity?: string | null
    hqCountry?: string | null
    logoUrl?: string | null
    website?: string | null
    stage?: string | null
    isUnicorn?: boolean | null
    valuation?: bigint | number | null
    growthScore?: number | null
    lastScrapedAt?: Date | string | null
    dataConfidenceScore?: number | null
    claimedBy?: string | null
    claimedAt?: Date | string | null
    founders?: FounderUncheckedCreateNestedManyWithoutCompanyInput
    fundingRounds?: FundingRoundUncheckedCreateNestedManyWithoutCompanyInput
    relatedFrom?: CompanyRelationshipUncheckedCreateNestedManyWithoutSourceCompanyInput
    relatedTo?: CompanyRelationshipUncheckedCreateNestedManyWithoutTargetCompanyInput
    newsArticles?: NewsArticleUncheckedCreateNestedManyWithoutCompaniesInput
    tags?: TagUncheckedCreateNestedManyWithoutCompaniesInput
  }

  export type CompanyCreateOrConnectWithoutProductsInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutProductsInput, CompanyUncheckedCreateWithoutProductsInput>
  }

  export type TagCreateWithoutProductsInput = {
    id?: string
    name: string
    slug: string
    type: $Enums.TagType
    companies?: CompanyCreateNestedManyWithoutTagsInput
  }

  export type TagUncheckedCreateWithoutProductsInput = {
    id?: string
    name: string
    slug: string
    type: $Enums.TagType
    companies?: CompanyUncheckedCreateNestedManyWithoutTagsInput
  }

  export type TagCreateOrConnectWithoutProductsInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutProductsInput, TagUncheckedCreateWithoutProductsInput>
  }

  export type CompanyUpsertWithoutProductsInput = {
    update: XOR<CompanyUpdateWithoutProductsInput, CompanyUncheckedUpdateWithoutProductsInput>
    create: XOR<CompanyCreateWithoutProductsInput, CompanyUncheckedCreateWithoutProductsInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutProductsInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutProductsInput, CompanyUncheckedUpdateWithoutProductsInput>
  }

  export type CompanyUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    fundingTotal?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    employeeCount?: NullableIntFieldUpdateOperationsInput | number | null
    foundedYear?: NullableIntFieldUpdateOperationsInput | number | null
    hqCity?: NullableStringFieldUpdateOperationsInput | string | null
    hqCountry?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    stage?: NullableStringFieldUpdateOperationsInput | string | null
    isUnicorn?: NullableBoolFieldUpdateOperationsInput | boolean | null
    valuation?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    growthScore?: NullableFloatFieldUpdateOperationsInput | number | null
    lastScrapedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataConfidenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    claimedBy?: NullableStringFieldUpdateOperationsInput | string | null
    claimedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    founders?: FounderUpdateManyWithoutCompanyNestedInput
    fundingRounds?: FundingRoundUpdateManyWithoutCompanyNestedInput
    relatedFrom?: CompanyRelationshipUpdateManyWithoutSourceCompanyNestedInput
    relatedTo?: CompanyRelationshipUpdateManyWithoutTargetCompanyNestedInput
    newsArticles?: NewsArticleUpdateManyWithoutCompaniesNestedInput
    tags?: TagUpdateManyWithoutCompaniesNestedInput
  }

  export type CompanyUncheckedUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    fundingTotal?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    employeeCount?: NullableIntFieldUpdateOperationsInput | number | null
    foundedYear?: NullableIntFieldUpdateOperationsInput | number | null
    hqCity?: NullableStringFieldUpdateOperationsInput | string | null
    hqCountry?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    stage?: NullableStringFieldUpdateOperationsInput | string | null
    isUnicorn?: NullableBoolFieldUpdateOperationsInput | boolean | null
    valuation?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    growthScore?: NullableFloatFieldUpdateOperationsInput | number | null
    lastScrapedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataConfidenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    claimedBy?: NullableStringFieldUpdateOperationsInput | string | null
    claimedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    founders?: FounderUncheckedUpdateManyWithoutCompanyNestedInput
    fundingRounds?: FundingRoundUncheckedUpdateManyWithoutCompanyNestedInput
    relatedFrom?: CompanyRelationshipUncheckedUpdateManyWithoutSourceCompanyNestedInput
    relatedTo?: CompanyRelationshipUncheckedUpdateManyWithoutTargetCompanyNestedInput
    newsArticles?: NewsArticleUncheckedUpdateManyWithoutCompaniesNestedInput
    tags?: TagUncheckedUpdateManyWithoutCompaniesNestedInput
  }

  export type TagUpsertWithWhereUniqueWithoutProductsInput = {
    where: TagWhereUniqueInput
    update: XOR<TagUpdateWithoutProductsInput, TagUncheckedUpdateWithoutProductsInput>
    create: XOR<TagCreateWithoutProductsInput, TagUncheckedCreateWithoutProductsInput>
  }

  export type TagUpdateWithWhereUniqueWithoutProductsInput = {
    where: TagWhereUniqueInput
    data: XOR<TagUpdateWithoutProductsInput, TagUncheckedUpdateWithoutProductsInput>
  }

  export type TagUpdateManyWithWhereWithoutProductsInput = {
    where: TagScalarWhereInput
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyWithoutProductsInput>
  }

  export type CompanyCreateWithoutFundingRoundsInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    category: string
    fundingTotal?: bigint | number | null
    employeeCount?: number | null
    foundedYear?: number | null
    hqCity?: string | null
    hqCountry?: string | null
    logoUrl?: string | null
    website?: string | null
    stage?: string | null
    isUnicorn?: boolean | null
    valuation?: bigint | number | null
    growthScore?: number | null
    lastScrapedAt?: Date | string | null
    dataConfidenceScore?: number | null
    claimedBy?: string | null
    claimedAt?: Date | string | null
    founders?: FounderCreateNestedManyWithoutCompanyInput
    products?: ProductCreateNestedManyWithoutCompanyInput
    relatedFrom?: CompanyRelationshipCreateNestedManyWithoutSourceCompanyInput
    relatedTo?: CompanyRelationshipCreateNestedManyWithoutTargetCompanyInput
    newsArticles?: NewsArticleCreateNestedManyWithoutCompaniesInput
    tags?: TagCreateNestedManyWithoutCompaniesInput
  }

  export type CompanyUncheckedCreateWithoutFundingRoundsInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    category: string
    fundingTotal?: bigint | number | null
    employeeCount?: number | null
    foundedYear?: number | null
    hqCity?: string | null
    hqCountry?: string | null
    logoUrl?: string | null
    website?: string | null
    stage?: string | null
    isUnicorn?: boolean | null
    valuation?: bigint | number | null
    growthScore?: number | null
    lastScrapedAt?: Date | string | null
    dataConfidenceScore?: number | null
    claimedBy?: string | null
    claimedAt?: Date | string | null
    founders?: FounderUncheckedCreateNestedManyWithoutCompanyInput
    products?: ProductUncheckedCreateNestedManyWithoutCompanyInput
    relatedFrom?: CompanyRelationshipUncheckedCreateNestedManyWithoutSourceCompanyInput
    relatedTo?: CompanyRelationshipUncheckedCreateNestedManyWithoutTargetCompanyInput
    newsArticles?: NewsArticleUncheckedCreateNestedManyWithoutCompaniesInput
    tags?: TagUncheckedCreateNestedManyWithoutCompaniesInput
  }

  export type CompanyCreateOrConnectWithoutFundingRoundsInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutFundingRoundsInput, CompanyUncheckedCreateWithoutFundingRoundsInput>
  }

  export type InvestorCreateWithoutLeadRoundsInput = {
    id?: string
    name: string
    slug: string
    type?: string | null
    bio?: string | null
    aum?: bigint | number | null
    portfolioCount?: number | null
    stageFocus?: InvestorCreatestageFocusInput | string[]
    sectorFocus?: InvestorCreatesectorFocusInput | string[]
    location?: string | null
    logoUrl?: string | null
    avgCheckSize?: bigint | number | null
    fundNumber?: number | null
  }

  export type InvestorUncheckedCreateWithoutLeadRoundsInput = {
    id?: string
    name: string
    slug: string
    type?: string | null
    bio?: string | null
    aum?: bigint | number | null
    portfolioCount?: number | null
    stageFocus?: InvestorCreatestageFocusInput | string[]
    sectorFocus?: InvestorCreatesectorFocusInput | string[]
    location?: string | null
    logoUrl?: string | null
    avgCheckSize?: bigint | number | null
    fundNumber?: number | null
  }

  export type InvestorCreateOrConnectWithoutLeadRoundsInput = {
    where: InvestorWhereUniqueInput
    create: XOR<InvestorCreateWithoutLeadRoundsInput, InvestorUncheckedCreateWithoutLeadRoundsInput>
  }

  export type CompanyUpsertWithoutFundingRoundsInput = {
    update: XOR<CompanyUpdateWithoutFundingRoundsInput, CompanyUncheckedUpdateWithoutFundingRoundsInput>
    create: XOR<CompanyCreateWithoutFundingRoundsInput, CompanyUncheckedCreateWithoutFundingRoundsInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutFundingRoundsInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutFundingRoundsInput, CompanyUncheckedUpdateWithoutFundingRoundsInput>
  }

  export type CompanyUpdateWithoutFundingRoundsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    fundingTotal?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    employeeCount?: NullableIntFieldUpdateOperationsInput | number | null
    foundedYear?: NullableIntFieldUpdateOperationsInput | number | null
    hqCity?: NullableStringFieldUpdateOperationsInput | string | null
    hqCountry?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    stage?: NullableStringFieldUpdateOperationsInput | string | null
    isUnicorn?: NullableBoolFieldUpdateOperationsInput | boolean | null
    valuation?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    growthScore?: NullableFloatFieldUpdateOperationsInput | number | null
    lastScrapedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataConfidenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    claimedBy?: NullableStringFieldUpdateOperationsInput | string | null
    claimedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    founders?: FounderUpdateManyWithoutCompanyNestedInput
    products?: ProductUpdateManyWithoutCompanyNestedInput
    relatedFrom?: CompanyRelationshipUpdateManyWithoutSourceCompanyNestedInput
    relatedTo?: CompanyRelationshipUpdateManyWithoutTargetCompanyNestedInput
    newsArticles?: NewsArticleUpdateManyWithoutCompaniesNestedInput
    tags?: TagUpdateManyWithoutCompaniesNestedInput
  }

  export type CompanyUncheckedUpdateWithoutFundingRoundsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    fundingTotal?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    employeeCount?: NullableIntFieldUpdateOperationsInput | number | null
    foundedYear?: NullableIntFieldUpdateOperationsInput | number | null
    hqCity?: NullableStringFieldUpdateOperationsInput | string | null
    hqCountry?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    stage?: NullableStringFieldUpdateOperationsInput | string | null
    isUnicorn?: NullableBoolFieldUpdateOperationsInput | boolean | null
    valuation?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    growthScore?: NullableFloatFieldUpdateOperationsInput | number | null
    lastScrapedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataConfidenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    claimedBy?: NullableStringFieldUpdateOperationsInput | string | null
    claimedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    founders?: FounderUncheckedUpdateManyWithoutCompanyNestedInput
    products?: ProductUncheckedUpdateManyWithoutCompanyNestedInput
    relatedFrom?: CompanyRelationshipUncheckedUpdateManyWithoutSourceCompanyNestedInput
    relatedTo?: CompanyRelationshipUncheckedUpdateManyWithoutTargetCompanyNestedInput
    newsArticles?: NewsArticleUncheckedUpdateManyWithoutCompaniesNestedInput
    tags?: TagUncheckedUpdateManyWithoutCompaniesNestedInput
  }

  export type InvestorUpsertWithoutLeadRoundsInput = {
    update: XOR<InvestorUpdateWithoutLeadRoundsInput, InvestorUncheckedUpdateWithoutLeadRoundsInput>
    create: XOR<InvestorCreateWithoutLeadRoundsInput, InvestorUncheckedCreateWithoutLeadRoundsInput>
    where?: InvestorWhereInput
  }

  export type InvestorUpdateToOneWithWhereWithoutLeadRoundsInput = {
    where?: InvestorWhereInput
    data: XOR<InvestorUpdateWithoutLeadRoundsInput, InvestorUncheckedUpdateWithoutLeadRoundsInput>
  }

  export type InvestorUpdateWithoutLeadRoundsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    aum?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    portfolioCount?: NullableIntFieldUpdateOperationsInput | number | null
    stageFocus?: InvestorUpdatestageFocusInput | string[]
    sectorFocus?: InvestorUpdatesectorFocusInput | string[]
    location?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    avgCheckSize?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    fundNumber?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type InvestorUncheckedUpdateWithoutLeadRoundsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    aum?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    portfolioCount?: NullableIntFieldUpdateOperationsInput | number | null
    stageFocus?: InvestorUpdatestageFocusInput | string[]
    sectorFocus?: InvestorUpdatesectorFocusInput | string[]
    location?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    avgCheckSize?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    fundNumber?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CompanyCreateWithoutNewsArticlesInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    category: string
    fundingTotal?: bigint | number | null
    employeeCount?: number | null
    foundedYear?: number | null
    hqCity?: string | null
    hqCountry?: string | null
    logoUrl?: string | null
    website?: string | null
    stage?: string | null
    isUnicorn?: boolean | null
    valuation?: bigint | number | null
    growthScore?: number | null
    lastScrapedAt?: Date | string | null
    dataConfidenceScore?: number | null
    claimedBy?: string | null
    claimedAt?: Date | string | null
    founders?: FounderCreateNestedManyWithoutCompanyInput
    products?: ProductCreateNestedManyWithoutCompanyInput
    fundingRounds?: FundingRoundCreateNestedManyWithoutCompanyInput
    relatedFrom?: CompanyRelationshipCreateNestedManyWithoutSourceCompanyInput
    relatedTo?: CompanyRelationshipCreateNestedManyWithoutTargetCompanyInput
    tags?: TagCreateNestedManyWithoutCompaniesInput
  }

  export type CompanyUncheckedCreateWithoutNewsArticlesInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    category: string
    fundingTotal?: bigint | number | null
    employeeCount?: number | null
    foundedYear?: number | null
    hqCity?: string | null
    hqCountry?: string | null
    logoUrl?: string | null
    website?: string | null
    stage?: string | null
    isUnicorn?: boolean | null
    valuation?: bigint | number | null
    growthScore?: number | null
    lastScrapedAt?: Date | string | null
    dataConfidenceScore?: number | null
    claimedBy?: string | null
    claimedAt?: Date | string | null
    founders?: FounderUncheckedCreateNestedManyWithoutCompanyInput
    products?: ProductUncheckedCreateNestedManyWithoutCompanyInput
    fundingRounds?: FundingRoundUncheckedCreateNestedManyWithoutCompanyInput
    relatedFrom?: CompanyRelationshipUncheckedCreateNestedManyWithoutSourceCompanyInput
    relatedTo?: CompanyRelationshipUncheckedCreateNestedManyWithoutTargetCompanyInput
    tags?: TagUncheckedCreateNestedManyWithoutCompaniesInput
  }

  export type CompanyCreateOrConnectWithoutNewsArticlesInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutNewsArticlesInput, CompanyUncheckedCreateWithoutNewsArticlesInput>
  }

  export type CompanyUpsertWithWhereUniqueWithoutNewsArticlesInput = {
    where: CompanyWhereUniqueInput
    update: XOR<CompanyUpdateWithoutNewsArticlesInput, CompanyUncheckedUpdateWithoutNewsArticlesInput>
    create: XOR<CompanyCreateWithoutNewsArticlesInput, CompanyUncheckedCreateWithoutNewsArticlesInput>
  }

  export type CompanyUpdateWithWhereUniqueWithoutNewsArticlesInput = {
    where: CompanyWhereUniqueInput
    data: XOR<CompanyUpdateWithoutNewsArticlesInput, CompanyUncheckedUpdateWithoutNewsArticlesInput>
  }

  export type CompanyUpdateManyWithWhereWithoutNewsArticlesInput = {
    where: CompanyScalarWhereInput
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyWithoutNewsArticlesInput>
  }

  export type CompanyScalarWhereInput = {
    AND?: CompanyScalarWhereInput | CompanyScalarWhereInput[]
    OR?: CompanyScalarWhereInput[]
    NOT?: CompanyScalarWhereInput | CompanyScalarWhereInput[]
    id?: StringFilter<"Company"> | string
    name?: StringFilter<"Company"> | string
    slug?: StringFilter<"Company"> | string
    description?: StringNullableFilter<"Company"> | string | null
    category?: StringFilter<"Company"> | string
    fundingTotal?: BigIntNullableFilter<"Company"> | bigint | number | null
    employeeCount?: IntNullableFilter<"Company"> | number | null
    foundedYear?: IntNullableFilter<"Company"> | number | null
    hqCity?: StringNullableFilter<"Company"> | string | null
    hqCountry?: StringNullableFilter<"Company"> | string | null
    logoUrl?: StringNullableFilter<"Company"> | string | null
    website?: StringNullableFilter<"Company"> | string | null
    stage?: StringNullableFilter<"Company"> | string | null
    isUnicorn?: BoolNullableFilter<"Company"> | boolean | null
    valuation?: BigIntNullableFilter<"Company"> | bigint | number | null
    growthScore?: FloatNullableFilter<"Company"> | number | null
    lastScrapedAt?: DateTimeNullableFilter<"Company"> | Date | string | null
    dataConfidenceScore?: FloatNullableFilter<"Company"> | number | null
    claimedBy?: StringNullableFilter<"Company"> | string | null
    claimedAt?: DateTimeNullableFilter<"Company"> | Date | string | null
  }

  export type CompanyCreateWithoutTagsInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    category: string
    fundingTotal?: bigint | number | null
    employeeCount?: number | null
    foundedYear?: number | null
    hqCity?: string | null
    hqCountry?: string | null
    logoUrl?: string | null
    website?: string | null
    stage?: string | null
    isUnicorn?: boolean | null
    valuation?: bigint | number | null
    growthScore?: number | null
    lastScrapedAt?: Date | string | null
    dataConfidenceScore?: number | null
    claimedBy?: string | null
    claimedAt?: Date | string | null
    founders?: FounderCreateNestedManyWithoutCompanyInput
    products?: ProductCreateNestedManyWithoutCompanyInput
    fundingRounds?: FundingRoundCreateNestedManyWithoutCompanyInput
    relatedFrom?: CompanyRelationshipCreateNestedManyWithoutSourceCompanyInput
    relatedTo?: CompanyRelationshipCreateNestedManyWithoutTargetCompanyInput
    newsArticles?: NewsArticleCreateNestedManyWithoutCompaniesInput
  }

  export type CompanyUncheckedCreateWithoutTagsInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    category: string
    fundingTotal?: bigint | number | null
    employeeCount?: number | null
    foundedYear?: number | null
    hqCity?: string | null
    hqCountry?: string | null
    logoUrl?: string | null
    website?: string | null
    stage?: string | null
    isUnicorn?: boolean | null
    valuation?: bigint | number | null
    growthScore?: number | null
    lastScrapedAt?: Date | string | null
    dataConfidenceScore?: number | null
    claimedBy?: string | null
    claimedAt?: Date | string | null
    founders?: FounderUncheckedCreateNestedManyWithoutCompanyInput
    products?: ProductUncheckedCreateNestedManyWithoutCompanyInput
    fundingRounds?: FundingRoundUncheckedCreateNestedManyWithoutCompanyInput
    relatedFrom?: CompanyRelationshipUncheckedCreateNestedManyWithoutSourceCompanyInput
    relatedTo?: CompanyRelationshipUncheckedCreateNestedManyWithoutTargetCompanyInput
    newsArticles?: NewsArticleUncheckedCreateNestedManyWithoutCompaniesInput
  }

  export type CompanyCreateOrConnectWithoutTagsInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutTagsInput, CompanyUncheckedCreateWithoutTagsInput>
  }

  export type ProductCreateWithoutTagsInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    category?: string | null
    launchDate?: Date | string | null
    upvotes?: number | null
    websiteUrl?: string | null
    company: CompanyCreateNestedOneWithoutProductsInput
  }

  export type ProductUncheckedCreateWithoutTagsInput = {
    id?: string
    companyId: string
    name: string
    slug: string
    description?: string | null
    category?: string | null
    launchDate?: Date | string | null
    upvotes?: number | null
    websiteUrl?: string | null
  }

  export type ProductCreateOrConnectWithoutTagsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutTagsInput, ProductUncheckedCreateWithoutTagsInput>
  }

  export type CompanyUpsertWithWhereUniqueWithoutTagsInput = {
    where: CompanyWhereUniqueInput
    update: XOR<CompanyUpdateWithoutTagsInput, CompanyUncheckedUpdateWithoutTagsInput>
    create: XOR<CompanyCreateWithoutTagsInput, CompanyUncheckedCreateWithoutTagsInput>
  }

  export type CompanyUpdateWithWhereUniqueWithoutTagsInput = {
    where: CompanyWhereUniqueInput
    data: XOR<CompanyUpdateWithoutTagsInput, CompanyUncheckedUpdateWithoutTagsInput>
  }

  export type CompanyUpdateManyWithWhereWithoutTagsInput = {
    where: CompanyScalarWhereInput
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyWithoutTagsInput>
  }

  export type ProductUpsertWithWhereUniqueWithoutTagsInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutTagsInput, ProductUncheckedUpdateWithoutTagsInput>
    create: XOR<ProductCreateWithoutTagsInput, ProductUncheckedCreateWithoutTagsInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutTagsInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutTagsInput, ProductUncheckedUpdateWithoutTagsInput>
  }

  export type ProductUpdateManyWithWhereWithoutTagsInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutTagsInput>
  }

  export type CompanyCreateWithoutRelatedFromInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    category: string
    fundingTotal?: bigint | number | null
    employeeCount?: number | null
    foundedYear?: number | null
    hqCity?: string | null
    hqCountry?: string | null
    logoUrl?: string | null
    website?: string | null
    stage?: string | null
    isUnicorn?: boolean | null
    valuation?: bigint | number | null
    growthScore?: number | null
    lastScrapedAt?: Date | string | null
    dataConfidenceScore?: number | null
    claimedBy?: string | null
    claimedAt?: Date | string | null
    founders?: FounderCreateNestedManyWithoutCompanyInput
    products?: ProductCreateNestedManyWithoutCompanyInput
    fundingRounds?: FundingRoundCreateNestedManyWithoutCompanyInput
    relatedTo?: CompanyRelationshipCreateNestedManyWithoutTargetCompanyInput
    newsArticles?: NewsArticleCreateNestedManyWithoutCompaniesInput
    tags?: TagCreateNestedManyWithoutCompaniesInput
  }

  export type CompanyUncheckedCreateWithoutRelatedFromInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    category: string
    fundingTotal?: bigint | number | null
    employeeCount?: number | null
    foundedYear?: number | null
    hqCity?: string | null
    hqCountry?: string | null
    logoUrl?: string | null
    website?: string | null
    stage?: string | null
    isUnicorn?: boolean | null
    valuation?: bigint | number | null
    growthScore?: number | null
    lastScrapedAt?: Date | string | null
    dataConfidenceScore?: number | null
    claimedBy?: string | null
    claimedAt?: Date | string | null
    founders?: FounderUncheckedCreateNestedManyWithoutCompanyInput
    products?: ProductUncheckedCreateNestedManyWithoutCompanyInput
    fundingRounds?: FundingRoundUncheckedCreateNestedManyWithoutCompanyInput
    relatedTo?: CompanyRelationshipUncheckedCreateNestedManyWithoutTargetCompanyInput
    newsArticles?: NewsArticleUncheckedCreateNestedManyWithoutCompaniesInput
    tags?: TagUncheckedCreateNestedManyWithoutCompaniesInput
  }

  export type CompanyCreateOrConnectWithoutRelatedFromInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutRelatedFromInput, CompanyUncheckedCreateWithoutRelatedFromInput>
  }

  export type CompanyCreateWithoutRelatedToInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    category: string
    fundingTotal?: bigint | number | null
    employeeCount?: number | null
    foundedYear?: number | null
    hqCity?: string | null
    hqCountry?: string | null
    logoUrl?: string | null
    website?: string | null
    stage?: string | null
    isUnicorn?: boolean | null
    valuation?: bigint | number | null
    growthScore?: number | null
    lastScrapedAt?: Date | string | null
    dataConfidenceScore?: number | null
    claimedBy?: string | null
    claimedAt?: Date | string | null
    founders?: FounderCreateNestedManyWithoutCompanyInput
    products?: ProductCreateNestedManyWithoutCompanyInput
    fundingRounds?: FundingRoundCreateNestedManyWithoutCompanyInput
    relatedFrom?: CompanyRelationshipCreateNestedManyWithoutSourceCompanyInput
    newsArticles?: NewsArticleCreateNestedManyWithoutCompaniesInput
    tags?: TagCreateNestedManyWithoutCompaniesInput
  }

  export type CompanyUncheckedCreateWithoutRelatedToInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    category: string
    fundingTotal?: bigint | number | null
    employeeCount?: number | null
    foundedYear?: number | null
    hqCity?: string | null
    hqCountry?: string | null
    logoUrl?: string | null
    website?: string | null
    stage?: string | null
    isUnicorn?: boolean | null
    valuation?: bigint | number | null
    growthScore?: number | null
    lastScrapedAt?: Date | string | null
    dataConfidenceScore?: number | null
    claimedBy?: string | null
    claimedAt?: Date | string | null
    founders?: FounderUncheckedCreateNestedManyWithoutCompanyInput
    products?: ProductUncheckedCreateNestedManyWithoutCompanyInput
    fundingRounds?: FundingRoundUncheckedCreateNestedManyWithoutCompanyInput
    relatedFrom?: CompanyRelationshipUncheckedCreateNestedManyWithoutSourceCompanyInput
    newsArticles?: NewsArticleUncheckedCreateNestedManyWithoutCompaniesInput
    tags?: TagUncheckedCreateNestedManyWithoutCompaniesInput
  }

  export type CompanyCreateOrConnectWithoutRelatedToInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutRelatedToInput, CompanyUncheckedCreateWithoutRelatedToInput>
  }

  export type CompanyUpsertWithoutRelatedFromInput = {
    update: XOR<CompanyUpdateWithoutRelatedFromInput, CompanyUncheckedUpdateWithoutRelatedFromInput>
    create: XOR<CompanyCreateWithoutRelatedFromInput, CompanyUncheckedCreateWithoutRelatedFromInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutRelatedFromInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutRelatedFromInput, CompanyUncheckedUpdateWithoutRelatedFromInput>
  }

  export type CompanyUpdateWithoutRelatedFromInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    fundingTotal?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    employeeCount?: NullableIntFieldUpdateOperationsInput | number | null
    foundedYear?: NullableIntFieldUpdateOperationsInput | number | null
    hqCity?: NullableStringFieldUpdateOperationsInput | string | null
    hqCountry?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    stage?: NullableStringFieldUpdateOperationsInput | string | null
    isUnicorn?: NullableBoolFieldUpdateOperationsInput | boolean | null
    valuation?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    growthScore?: NullableFloatFieldUpdateOperationsInput | number | null
    lastScrapedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataConfidenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    claimedBy?: NullableStringFieldUpdateOperationsInput | string | null
    claimedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    founders?: FounderUpdateManyWithoutCompanyNestedInput
    products?: ProductUpdateManyWithoutCompanyNestedInput
    fundingRounds?: FundingRoundUpdateManyWithoutCompanyNestedInput
    relatedTo?: CompanyRelationshipUpdateManyWithoutTargetCompanyNestedInput
    newsArticles?: NewsArticleUpdateManyWithoutCompaniesNestedInput
    tags?: TagUpdateManyWithoutCompaniesNestedInput
  }

  export type CompanyUncheckedUpdateWithoutRelatedFromInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    fundingTotal?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    employeeCount?: NullableIntFieldUpdateOperationsInput | number | null
    foundedYear?: NullableIntFieldUpdateOperationsInput | number | null
    hqCity?: NullableStringFieldUpdateOperationsInput | string | null
    hqCountry?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    stage?: NullableStringFieldUpdateOperationsInput | string | null
    isUnicorn?: NullableBoolFieldUpdateOperationsInput | boolean | null
    valuation?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    growthScore?: NullableFloatFieldUpdateOperationsInput | number | null
    lastScrapedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataConfidenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    claimedBy?: NullableStringFieldUpdateOperationsInput | string | null
    claimedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    founders?: FounderUncheckedUpdateManyWithoutCompanyNestedInput
    products?: ProductUncheckedUpdateManyWithoutCompanyNestedInput
    fundingRounds?: FundingRoundUncheckedUpdateManyWithoutCompanyNestedInput
    relatedTo?: CompanyRelationshipUncheckedUpdateManyWithoutTargetCompanyNestedInput
    newsArticles?: NewsArticleUncheckedUpdateManyWithoutCompaniesNestedInput
    tags?: TagUncheckedUpdateManyWithoutCompaniesNestedInput
  }

  export type CompanyUpsertWithoutRelatedToInput = {
    update: XOR<CompanyUpdateWithoutRelatedToInput, CompanyUncheckedUpdateWithoutRelatedToInput>
    create: XOR<CompanyCreateWithoutRelatedToInput, CompanyUncheckedCreateWithoutRelatedToInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutRelatedToInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutRelatedToInput, CompanyUncheckedUpdateWithoutRelatedToInput>
  }

  export type CompanyUpdateWithoutRelatedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    fundingTotal?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    employeeCount?: NullableIntFieldUpdateOperationsInput | number | null
    foundedYear?: NullableIntFieldUpdateOperationsInput | number | null
    hqCity?: NullableStringFieldUpdateOperationsInput | string | null
    hqCountry?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    stage?: NullableStringFieldUpdateOperationsInput | string | null
    isUnicorn?: NullableBoolFieldUpdateOperationsInput | boolean | null
    valuation?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    growthScore?: NullableFloatFieldUpdateOperationsInput | number | null
    lastScrapedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataConfidenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    claimedBy?: NullableStringFieldUpdateOperationsInput | string | null
    claimedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    founders?: FounderUpdateManyWithoutCompanyNestedInput
    products?: ProductUpdateManyWithoutCompanyNestedInput
    fundingRounds?: FundingRoundUpdateManyWithoutCompanyNestedInput
    relatedFrom?: CompanyRelationshipUpdateManyWithoutSourceCompanyNestedInput
    newsArticles?: NewsArticleUpdateManyWithoutCompaniesNestedInput
    tags?: TagUpdateManyWithoutCompaniesNestedInput
  }

  export type CompanyUncheckedUpdateWithoutRelatedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    fundingTotal?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    employeeCount?: NullableIntFieldUpdateOperationsInput | number | null
    foundedYear?: NullableIntFieldUpdateOperationsInput | number | null
    hqCity?: NullableStringFieldUpdateOperationsInput | string | null
    hqCountry?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    stage?: NullableStringFieldUpdateOperationsInput | string | null
    isUnicorn?: NullableBoolFieldUpdateOperationsInput | boolean | null
    valuation?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    growthScore?: NullableFloatFieldUpdateOperationsInput | number | null
    lastScrapedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataConfidenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    claimedBy?: NullableStringFieldUpdateOperationsInput | string | null
    claimedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    founders?: FounderUncheckedUpdateManyWithoutCompanyNestedInput
    products?: ProductUncheckedUpdateManyWithoutCompanyNestedInput
    fundingRounds?: FundingRoundUncheckedUpdateManyWithoutCompanyNestedInput
    relatedFrom?: CompanyRelationshipUncheckedUpdateManyWithoutSourceCompanyNestedInput
    newsArticles?: NewsArticleUncheckedUpdateManyWithoutCompaniesNestedInput
    tags?: TagUncheckedUpdateManyWithoutCompaniesNestedInput
  }

  export type FounderCreateManyCompanyInput = {
    id?: string
    name: string
    slug: string
    title?: string | null
    bio?: string | null
    twitter?: string | null
    linkedin?: string | null
    location?: string | null
    photoUrl?: string | null
  }

  export type ProductCreateManyCompanyInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    category?: string | null
    launchDate?: Date | string | null
    upvotes?: number | null
    websiteUrl?: string | null
  }

  export type FundingRoundCreateManyCompanyInput = {
    id?: string
    roundType: string
    amount?: bigint | number | null
    currency?: string | null
    date: Date | string
    leadInvestorId?: string | null
    coInvestors?: FundingRoundCreatecoInvestorsInput | string[]
  }

  export type CompanyRelationshipCreateManySourceCompanyInput = {
    id?: string
    targetCompanyId: string
    relationshipType: $Enums.RelationshipType
  }

  export type CompanyRelationshipCreateManyTargetCompanyInput = {
    id?: string
    sourceCompanyId: string
    relationshipType: $Enums.RelationshipType
  }

  export type FounderUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FounderUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FounderUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    launchDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    upvotes?: NullableIntFieldUpdateOperationsInput | number | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: TagUpdateManyWithoutProductsNestedInput
  }

  export type ProductUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    launchDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    upvotes?: NullableIntFieldUpdateOperationsInput | number | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: TagUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    launchDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    upvotes?: NullableIntFieldUpdateOperationsInput | number | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FundingRoundUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    roundType?: StringFieldUpdateOperationsInput | string
    amount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    coInvestors?: FundingRoundUpdatecoInvestorsInput | string[]
    leadInvestor?: InvestorUpdateOneWithoutLeadRoundsNestedInput
  }

  export type FundingRoundUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    roundType?: StringFieldUpdateOperationsInput | string
    amount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    leadInvestorId?: NullableStringFieldUpdateOperationsInput | string | null
    coInvestors?: FundingRoundUpdatecoInvestorsInput | string[]
  }

  export type FundingRoundUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    roundType?: StringFieldUpdateOperationsInput | string
    amount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    leadInvestorId?: NullableStringFieldUpdateOperationsInput | string | null
    coInvestors?: FundingRoundUpdatecoInvestorsInput | string[]
  }

  export type CompanyRelationshipUpdateWithoutSourceCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    relationshipType?: EnumRelationshipTypeFieldUpdateOperationsInput | $Enums.RelationshipType
    targetCompany?: CompanyUpdateOneRequiredWithoutRelatedToNestedInput
  }

  export type CompanyRelationshipUncheckedUpdateWithoutSourceCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    targetCompanyId?: StringFieldUpdateOperationsInput | string
    relationshipType?: EnumRelationshipTypeFieldUpdateOperationsInput | $Enums.RelationshipType
  }

  export type CompanyRelationshipUncheckedUpdateManyWithoutSourceCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    targetCompanyId?: StringFieldUpdateOperationsInput | string
    relationshipType?: EnumRelationshipTypeFieldUpdateOperationsInput | $Enums.RelationshipType
  }

  export type CompanyRelationshipUpdateWithoutTargetCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    relationshipType?: EnumRelationshipTypeFieldUpdateOperationsInput | $Enums.RelationshipType
    sourceCompany?: CompanyUpdateOneRequiredWithoutRelatedFromNestedInput
  }

  export type CompanyRelationshipUncheckedUpdateWithoutTargetCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceCompanyId?: StringFieldUpdateOperationsInput | string
    relationshipType?: EnumRelationshipTypeFieldUpdateOperationsInput | $Enums.RelationshipType
  }

  export type CompanyRelationshipUncheckedUpdateManyWithoutTargetCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceCompanyId?: StringFieldUpdateOperationsInput | string
    relationshipType?: EnumRelationshipTypeFieldUpdateOperationsInput | $Enums.RelationshipType
  }

  export type NewsArticleUpdateWithoutCompaniesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: StringFieldUpdateOperationsInput | string
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    relatedCompanyIds?: NewsArticleUpdaterelatedCompanyIdsInput | string[]
    summary?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NewsArticleUncheckedUpdateWithoutCompaniesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: StringFieldUpdateOperationsInput | string
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    relatedCompanyIds?: NewsArticleUpdaterelatedCompanyIdsInput | string[]
    summary?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NewsArticleUncheckedUpdateManyWithoutCompaniesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: StringFieldUpdateOperationsInput | string
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    relatedCompanyIds?: NewsArticleUpdaterelatedCompanyIdsInput | string[]
    summary?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TagUpdateWithoutCompaniesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    type?: EnumTagTypeFieldUpdateOperationsInput | $Enums.TagType
    products?: ProductUpdateManyWithoutTagsNestedInput
  }

  export type TagUncheckedUpdateWithoutCompaniesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    type?: EnumTagTypeFieldUpdateOperationsInput | $Enums.TagType
    products?: ProductUncheckedUpdateManyWithoutTagsNestedInput
  }

  export type TagUncheckedUpdateManyWithoutCompaniesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    type?: EnumTagTypeFieldUpdateOperationsInput | $Enums.TagType
  }

  export type FundingRoundCreateManyLeadInvestorInput = {
    id?: string
    companyId: string
    roundType: string
    amount?: bigint | number | null
    currency?: string | null
    date: Date | string
    coInvestors?: FundingRoundCreatecoInvestorsInput | string[]
  }

  export type FundingRoundUpdateWithoutLeadInvestorInput = {
    id?: StringFieldUpdateOperationsInput | string
    roundType?: StringFieldUpdateOperationsInput | string
    amount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    coInvestors?: FundingRoundUpdatecoInvestorsInput | string[]
    company?: CompanyUpdateOneRequiredWithoutFundingRoundsNestedInput
  }

  export type FundingRoundUncheckedUpdateWithoutLeadInvestorInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    roundType?: StringFieldUpdateOperationsInput | string
    amount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    coInvestors?: FundingRoundUpdatecoInvestorsInput | string[]
  }

  export type FundingRoundUncheckedUpdateManyWithoutLeadInvestorInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    roundType?: StringFieldUpdateOperationsInput | string
    amount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    coInvestors?: FundingRoundUpdatecoInvestorsInput | string[]
  }

  export type TagUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    type?: EnumTagTypeFieldUpdateOperationsInput | $Enums.TagType
    companies?: CompanyUpdateManyWithoutTagsNestedInput
  }

  export type TagUncheckedUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    type?: EnumTagTypeFieldUpdateOperationsInput | $Enums.TagType
    companies?: CompanyUncheckedUpdateManyWithoutTagsNestedInput
  }

  export type TagUncheckedUpdateManyWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    type?: EnumTagTypeFieldUpdateOperationsInput | $Enums.TagType
  }

  export type CompanyUpdateWithoutNewsArticlesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    fundingTotal?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    employeeCount?: NullableIntFieldUpdateOperationsInput | number | null
    foundedYear?: NullableIntFieldUpdateOperationsInput | number | null
    hqCity?: NullableStringFieldUpdateOperationsInput | string | null
    hqCountry?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    stage?: NullableStringFieldUpdateOperationsInput | string | null
    isUnicorn?: NullableBoolFieldUpdateOperationsInput | boolean | null
    valuation?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    growthScore?: NullableFloatFieldUpdateOperationsInput | number | null
    lastScrapedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataConfidenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    claimedBy?: NullableStringFieldUpdateOperationsInput | string | null
    claimedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    founders?: FounderUpdateManyWithoutCompanyNestedInput
    products?: ProductUpdateManyWithoutCompanyNestedInput
    fundingRounds?: FundingRoundUpdateManyWithoutCompanyNestedInput
    relatedFrom?: CompanyRelationshipUpdateManyWithoutSourceCompanyNestedInput
    relatedTo?: CompanyRelationshipUpdateManyWithoutTargetCompanyNestedInput
    tags?: TagUpdateManyWithoutCompaniesNestedInput
  }

  export type CompanyUncheckedUpdateWithoutNewsArticlesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    fundingTotal?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    employeeCount?: NullableIntFieldUpdateOperationsInput | number | null
    foundedYear?: NullableIntFieldUpdateOperationsInput | number | null
    hqCity?: NullableStringFieldUpdateOperationsInput | string | null
    hqCountry?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    stage?: NullableStringFieldUpdateOperationsInput | string | null
    isUnicorn?: NullableBoolFieldUpdateOperationsInput | boolean | null
    valuation?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    growthScore?: NullableFloatFieldUpdateOperationsInput | number | null
    lastScrapedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataConfidenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    claimedBy?: NullableStringFieldUpdateOperationsInput | string | null
    claimedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    founders?: FounderUncheckedUpdateManyWithoutCompanyNestedInput
    products?: ProductUncheckedUpdateManyWithoutCompanyNestedInput
    fundingRounds?: FundingRoundUncheckedUpdateManyWithoutCompanyNestedInput
    relatedFrom?: CompanyRelationshipUncheckedUpdateManyWithoutSourceCompanyNestedInput
    relatedTo?: CompanyRelationshipUncheckedUpdateManyWithoutTargetCompanyNestedInput
    tags?: TagUncheckedUpdateManyWithoutCompaniesNestedInput
  }

  export type CompanyUncheckedUpdateManyWithoutNewsArticlesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    fundingTotal?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    employeeCount?: NullableIntFieldUpdateOperationsInput | number | null
    foundedYear?: NullableIntFieldUpdateOperationsInput | number | null
    hqCity?: NullableStringFieldUpdateOperationsInput | string | null
    hqCountry?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    stage?: NullableStringFieldUpdateOperationsInput | string | null
    isUnicorn?: NullableBoolFieldUpdateOperationsInput | boolean | null
    valuation?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    growthScore?: NullableFloatFieldUpdateOperationsInput | number | null
    lastScrapedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataConfidenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    claimedBy?: NullableStringFieldUpdateOperationsInput | string | null
    claimedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CompanyUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    fundingTotal?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    employeeCount?: NullableIntFieldUpdateOperationsInput | number | null
    foundedYear?: NullableIntFieldUpdateOperationsInput | number | null
    hqCity?: NullableStringFieldUpdateOperationsInput | string | null
    hqCountry?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    stage?: NullableStringFieldUpdateOperationsInput | string | null
    isUnicorn?: NullableBoolFieldUpdateOperationsInput | boolean | null
    valuation?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    growthScore?: NullableFloatFieldUpdateOperationsInput | number | null
    lastScrapedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataConfidenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    claimedBy?: NullableStringFieldUpdateOperationsInput | string | null
    claimedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    founders?: FounderUpdateManyWithoutCompanyNestedInput
    products?: ProductUpdateManyWithoutCompanyNestedInput
    fundingRounds?: FundingRoundUpdateManyWithoutCompanyNestedInput
    relatedFrom?: CompanyRelationshipUpdateManyWithoutSourceCompanyNestedInput
    relatedTo?: CompanyRelationshipUpdateManyWithoutTargetCompanyNestedInput
    newsArticles?: NewsArticleUpdateManyWithoutCompaniesNestedInput
  }

  export type CompanyUncheckedUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    fundingTotal?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    employeeCount?: NullableIntFieldUpdateOperationsInput | number | null
    foundedYear?: NullableIntFieldUpdateOperationsInput | number | null
    hqCity?: NullableStringFieldUpdateOperationsInput | string | null
    hqCountry?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    stage?: NullableStringFieldUpdateOperationsInput | string | null
    isUnicorn?: NullableBoolFieldUpdateOperationsInput | boolean | null
    valuation?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    growthScore?: NullableFloatFieldUpdateOperationsInput | number | null
    lastScrapedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataConfidenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    claimedBy?: NullableStringFieldUpdateOperationsInput | string | null
    claimedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    founders?: FounderUncheckedUpdateManyWithoutCompanyNestedInput
    products?: ProductUncheckedUpdateManyWithoutCompanyNestedInput
    fundingRounds?: FundingRoundUncheckedUpdateManyWithoutCompanyNestedInput
    relatedFrom?: CompanyRelationshipUncheckedUpdateManyWithoutSourceCompanyNestedInput
    relatedTo?: CompanyRelationshipUncheckedUpdateManyWithoutTargetCompanyNestedInput
    newsArticles?: NewsArticleUncheckedUpdateManyWithoutCompaniesNestedInput
  }

  export type CompanyUncheckedUpdateManyWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    fundingTotal?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    employeeCount?: NullableIntFieldUpdateOperationsInput | number | null
    foundedYear?: NullableIntFieldUpdateOperationsInput | number | null
    hqCity?: NullableStringFieldUpdateOperationsInput | string | null
    hqCountry?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    stage?: NullableStringFieldUpdateOperationsInput | string | null
    isUnicorn?: NullableBoolFieldUpdateOperationsInput | boolean | null
    valuation?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    growthScore?: NullableFloatFieldUpdateOperationsInput | number | null
    lastScrapedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataConfidenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    claimedBy?: NullableStringFieldUpdateOperationsInput | string | null
    claimedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    launchDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    upvotes?: NullableIntFieldUpdateOperationsInput | number | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    company?: CompanyUpdateOneRequiredWithoutProductsNestedInput
  }

  export type ProductUncheckedUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    launchDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    upvotes?: NullableIntFieldUpdateOperationsInput | number | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductUncheckedUpdateManyWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    launchDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    upvotes?: NullableIntFieldUpdateOperationsInput | number | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
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