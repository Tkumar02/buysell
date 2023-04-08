/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateListing2: OnCreateListing2Subscription;
  onUpdateListing2: OnUpdateListing2Subscription;
  onDeleteListing2: OnDeleteListing2Subscription;
};

export type CreateListing2Input = {
  id?: string | null;
  name: string;
  description: string;
  price: string;
};

export type ModelListing2ConditionInput = {
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  price?: ModelStringInput | null;
  and?: Array<ModelListing2ConditionInput | null> | null;
  or?: Array<ModelListing2ConditionInput | null> | null;
  not?: ModelListing2ConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type Listing2 = {
  __typename: "Listing2";
  id: string;
  name: string;
  description: string;
  price: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateListing2Input = {
  id: string;
  name?: string | null;
  description?: string | null;
  price?: string | null;
};

export type DeleteListing2Input = {
  id: string;
};

export type ModelListing2FilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  price?: ModelStringInput | null;
  and?: Array<ModelListing2FilterInput | null> | null;
  or?: Array<ModelListing2FilterInput | null> | null;
  not?: ModelListing2FilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelListing2Connection = {
  __typename: "ModelListing2Connection";
  items: Array<Listing2 | null>;
  nextToken?: string | null;
};

export type ModelSubscriptionListing2FilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  description?: ModelSubscriptionStringInput | null;
  price?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionListing2FilterInput | null> | null;
  or?: Array<ModelSubscriptionListing2FilterInput | null> | null;
};

export type ModelSubscriptionIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type CreateListing2Mutation = {
  __typename: "Listing2";
  id: string;
  name: string;
  description: string;
  price: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateListing2Mutation = {
  __typename: "Listing2";
  id: string;
  name: string;
  description: string;
  price: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteListing2Mutation = {
  __typename: "Listing2";
  id: string;
  name: string;
  description: string;
  price: string;
  createdAt: string;
  updatedAt: string;
};

export type GetListing2Query = {
  __typename: "Listing2";
  id: string;
  name: string;
  description: string;
  price: string;
  createdAt: string;
  updatedAt: string;
};

export type ListListing2sQuery = {
  __typename: "ModelListing2Connection";
  items: Array<{
    __typename: "Listing2";
    id: string;
    name: string;
    description: string;
    price: string;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type OnCreateListing2Subscription = {
  __typename: "Listing2";
  id: string;
  name: string;
  description: string;
  price: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateListing2Subscription = {
  __typename: "Listing2";
  id: string;
  name: string;
  description: string;
  price: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteListing2Subscription = {
  __typename: "Listing2";
  id: string;
  name: string;
  description: string;
  price: string;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateListing2(
    input: CreateListing2Input,
    condition?: ModelListing2ConditionInput
  ): Promise<CreateListing2Mutation> {
    const statement = `mutation CreateListing2($input: CreateListing2Input!, $condition: ModelListing2ConditionInput) {
        createListing2(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          price
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateListing2Mutation>response.data.createListing2;
  }
  async UpdateListing2(
    input: UpdateListing2Input,
    condition?: ModelListing2ConditionInput
  ): Promise<UpdateListing2Mutation> {
    const statement = `mutation UpdateListing2($input: UpdateListing2Input!, $condition: ModelListing2ConditionInput) {
        updateListing2(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          price
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateListing2Mutation>response.data.updateListing2;
  }
  async DeleteListing2(
    input: DeleteListing2Input,
    condition?: ModelListing2ConditionInput
  ): Promise<DeleteListing2Mutation> {
    const statement = `mutation DeleteListing2($input: DeleteListing2Input!, $condition: ModelListing2ConditionInput) {
        deleteListing2(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          price
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteListing2Mutation>response.data.deleteListing2;
  }
  async GetListing2(id: string): Promise<GetListing2Query> {
    const statement = `query GetListing2($id: ID!) {
        getListing2(id: $id) {
          __typename
          id
          name
          description
          price
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetListing2Query>response.data.getListing2;
  }
  async ListListing2s(
    filter?: ModelListing2FilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListListing2sQuery> {
    const statement = `query ListListing2s($filter: ModelListing2FilterInput, $limit: Int, $nextToken: String) {
        listListing2s(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            description
            price
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListListing2sQuery>response.data.listListing2s;
  }
  OnCreateListing2Listener(
    filter?: ModelSubscriptionListing2FilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateListing2">>
  > {
    const statement = `subscription OnCreateListing2($filter: ModelSubscriptionListing2FilterInput) {
        onCreateListing2(filter: $filter) {
          __typename
          id
          name
          description
          price
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateListing2">>
    >;
  }

  OnUpdateListing2Listener(
    filter?: ModelSubscriptionListing2FilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateListing2">>
  > {
    const statement = `subscription OnUpdateListing2($filter: ModelSubscriptionListing2FilterInput) {
        onUpdateListing2(filter: $filter) {
          __typename
          id
          name
          description
          price
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateListing2">>
    >;
  }

  OnDeleteListing2Listener(
    filter?: ModelSubscriptionListing2FilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteListing2">>
  > {
    const statement = `subscription OnDeleteListing2($filter: ModelSubscriptionListing2FilterInput) {
        onDeleteListing2(filter: $filter) {
          __typename
          id
          name
          description
          price
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteListing2">>
    >;
  }
}
